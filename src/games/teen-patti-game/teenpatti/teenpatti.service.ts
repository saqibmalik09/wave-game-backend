import { Injectable, Logger } from '@nestjs/common';
import { KafkaService } from 'src/kafka/kafka.service';
import { v4 as uuidv4 } from 'uuid';
import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
  ConnectedSocket,
  SubscribeMessage,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { HttpService } from '@nestjs/axios';
import axios from 'axios';
import { masterPrisma } from 'src/prisma/masterClient';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
@Injectable()
export class TeenpattiService implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  private readonly logger = new Logger(TeenpattiService.name);
  private betCount = 0;
  private startTime = Date.now();

  constructor(private readonly kafka: KafkaService) {
    setInterval(() => this.logThroughput(), 5000);
  }
  @WebSocketServer()
  server: Server;

  // ✅ Required WebSocket lifecycle methods
  afterInit(server: Server) {
    console.log(' Teenpatti Gateway Initialized');
  }

  async handleConnection(client: Socket) {
      const userId = `${client.handshake.query.userId ?? ''}`;
      const appKey = `${client.handshake.query.appKey ?? ''}`;

    if (!userId || !appKey) {
      console.log("Missing userId or appKey in params");
      return;
    }

    try {
      const existing = await masterPrisma.gameOngoingUsers.findUnique({
        where: { userId },
      });

      if (existing) {
        await masterPrisma.gameOngoingUsers.update({
          where: { userId },
          data: {
            socketId: client.id,
            appKey,
          },
        });
      } else {
        await masterPrisma.gameOngoingUsers.create({
          data: {
            userId,
            socketId: client.id,
            appKey,
          },
        });
      }

      console.log(`SocketId ${client.id} saved for userId ${userId}`);
    } catch (err) {
      console.error("DB error:", err);
    }

    console.log(`Client connected: ${client.id} userId ${userId}`);
  }

  async handleDisconnect(client: Socket) {
    try {
      console.log(`Client disconnected: ${client.id}`);
      // 1. Find user record using socketId
      const user = await masterPrisma.gameOngoingUsers.findFirst({
        where: { socketId: client.id },
      });
      if (user) {
        await masterPrisma.gameOngoingUsers.delete({
          where: { userId: user.userId },
        });

        console.log(`Deleted disconnected user: ${user.userId}`);
      } else {
        console.log(`No user found with socketId: ${client.id}`);
      }
    } catch (error) {
      console.error("Error in handleDisconnect:", error);
    }
  }

  public running = false;
  public announceWinningSent = false;
  public Users = [
    { userId: 'user_101', name: 'Alice', imageProfile: 'https://randomuser.me/api/portraits/women/65.jpg', socketId: "" },
    { userId: 'user_102', name: 'Bob', imageProfile: 'https://randomuser.me/api/portraits/men/66.jpg', socketId: "" },
    { userId: 'user_103', name: 'Charlie', imageProfile: 'https://randomuser.me/api/portraits/men/67.jpg', socketId: "" },
    // { userId: 'user_105', name: 'Max', imageProfile: 'https://randomuser.me/api/portraits/men/68.jpg' },
    // { userId: 'user_108', name: 'Alex', imageProfile: 'https://randomuser.me/api/portraits/men/70.jpg' },
    // { userId: 'user_108', name: 'Alex', imageProfile: 'https://randomuser.me/api/portraits/men/70.jpg' },

  ]
  @SubscribeMessage('teenPattiTimer')
  async startTimers() {
    if (this.running) return; // prevent duplicate loops
    this.running = true;


    const phases = [
      { name: 'bettingTimer', duration: 30 },
      { name: 'winningCalculationTimer', duration: 4 },
      { name: 'resultAnnounceTimer', duration: 5 },
      { name: 'newGameStartTimer', duration: 5 },
    ];

    while (true) {
      for (const phase of phases) {
        for (let remaining = phase.duration; remaining >= 0; remaining--) {
          // broadcast remaining seconds to all clients
          if (phase.name !== 'resultAnnounceTimer') {
            this.announceWinningSent = false;
          }
          this.server.emit('teenpattiTimer', {
            phase: phase.name,
            remaining,
          });

          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
        // broadcast phase complete
        this.server.emit('teenpattiTimer', {
          phase: phase.name,
          message: `${phase.name} completed.`,
        });
        if (phase.name === 'resultAnnounceTimer' && !this.announceWinningSent) {
          this.announceWinningSent = true;
          this.announceGameResult();
        }
        console.log(` Phase completed: ${phase.name}`);
      }

      // after all timers finish, loop restarts (new game cycle)
    }
  }
  @SubscribeMessage('placeTeenpattiBet')
  async placeBet(
    @MessageBody()
    bet: {
      userId: string;
      amount: number;
      betType?: number;
      appKey?: string;
      token?: string;
      gameId?: string;
      potIndex?: number;
      socketId: string;
      tenantBaseURL?:string;

    }) {
    const betId = uuidv4();
    const timestamp = Date.now();
    const { userId, amount, betType, token, gameId, potIndex, socketId,tenantBaseURL } = bet
    //call api
    let submitFlowData = {
      "betAmount": amount,
      "type": betType,
      "transactionId": betId
    }
    const baseURL = tenantBaseURL
    const endPoint = "/wave/game/submitFlow";
    const response = await axios.post(
      `${baseURL}${endPoint}`, submitFlowData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      timeout: 100000,
    }
    );
    // console.log("API response received:", response.data);
    const apiData = response.data;
    const playerNewBalance = apiData.data.balance;
    const enrichedBet = {
      betId,
      ...bet,
      game: 'teenpatti',
      timestamp,
      status: 'pending',
      newBalance: playerNewBalance,
    };

    try {
      // Produce to Kafka (async, non-blocking)
      await this.kafka.produce('teenpatti', enrichedBet);
      //prisma game ongoging users get socket id by user id
     let userSocketId= await masterPrisma.gameOngoingUsers.findFirst({
        where: { userId },  
        select: {
          socketId: true,
        },  
      });
      if (!userSocketId || !userSocketId.socketId) {
        console.log("SocketId not found for userId:", userId);
        return;
      }
      // console.log("Emitting bet response to socketId:", userSocketId.socketId);
      this.server.emit('teenpattiBetResponse', {
        success: apiData.success,
        message: apiData.message,
        data: {
          ...apiData.data,
          potIndex,
          amount
        },
      });

      return {
        success: apiData.success,
        message: apiData.message,
        data: enrichedBet,
      };
    } catch (error) {
      this.logger.error(`Failed to place bet ${betId}`, error.stack);
      throw error.message;
    }
  }

  /**
   * Batch bet placement for load testing
   */
  @SubscribeMessage('placeTeenpattiBetBatch')
  async placeBetBatch(
    @MessageBody()
    data: {
      bets: Array<{ userId: string; amount: number; betType?: number, socketId: string }>
    }
  ) {
    const { bets } = data;
    const enrichedBets = bets.map(bet => ({
      betId: uuidv4(),
      ...bet,
      game: 'teenpatti',
      timestamp: Date.now(),
      status: 'pending',
    }));

    try {
      await Promise.all(enrichedBets.map(bet => this.kafka.produce('teenpatti', bet)));
      this.server.emit('teenpattiBatchBetResponse', {
        success: true,
        message: `${bets.length} bets accepted for processing`,
        count: bets.length,
      });
      return {
        success: true,
        message: `${bets.length} bets accepted for processing`,
        count: bets.length,
      };
    } catch (error) {
      this.logger.error('Failed to place bet batch', error.stack);
      throw error;
    }
  }

  private logThroughput() {
    const elapsed = (Date.now() - this.startTime) / 1000; // seconds
    const betsPerSecond = Math.round(this.betCount / elapsed);

    if (this.betCount > 0) {
      this.logger.log(
        `📊 Bet Throughput: ${betsPerSecond} bets/sec | Total: ${this.betCount} bets in ${elapsed.toFixed(2)}s`
      );
    }
  }
  resetMetrics() {
    this.betCount = 0;
    this.startTime = Date.now();
  }

  getMetrics() {
    const elapsed = (Date.now() - this.startTime) / 1000;
    const betsPerSecond = this.betCount / elapsed;

    return {
      totalBets: this.betCount,
      elapsedTime: elapsed,
      betsPerSecond: Math.round(betsPerSecond),
    };
  }

  public teenpattiGameProbability(): number {
    const options = [0, 1, 2];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }
  public async playerIdAndTotalBet(potIndex: number): Promise<Record<string, number>> {
    // Group by userId and sum their bet amounts
    const betSums = await masterPrisma.ongoingTeenpattiGame.groupBy({
      by: ['userId'],
      where: { potIndex },
      _sum: { amount: true },
    });

    // Filter out null userIds and format result
    const winnerAmounts = betSums
      .filter(b => b.userId !== null)
      .reduce((acc, b) => {
        acc[b.userId as string] = b._sum.amount || 0;
        return acc;
      }, {} as Record<string, number>);

    return winnerAmounts;
  }
  public expectedWinningAmount(
    winnerIdsAndTotalBet: Record<string, number>,
    winningPercentage: number
  ): Record<string, number> {
    const results: Record<string, number> = {};

    for (const userId in winnerIdsAndTotalBet) {
      const totalBet = winnerIdsAndTotalBet[userId] ?? 0;
      const winningAmount = Math.round(totalBet * winningPercentage);
      results[userId] = winningAmount;
    }

    return results;
  }

  @SubscribeMessage('teenpattiAnnounceGameResult')
  async announceGameResult() {
    let winningPotIndex = this.teenpattiGameProbability();
    let winnningExpPercentage = {
      0: 1.9,
      1: 2.9,
      2: 2.2
    };
    //  Get userIds and their total bet for that potIndex
    const winnerIdsAndTotalBet = await this.playerIdAndTotalBet(winningPotIndex);
    //  Get correct winning percentage
    const winningPercentage = winnningExpPercentage[winningPotIndex];
    //  Calculate the expected winning amount for each user
    const expectedWinningAmount = this.expectedWinningAmount(
      winnerIdsAndTotalBet,
      winningPercentage
    );
    // If you need only the userIds
    const winnerIds = Object.keys(expectedWinningAmount);
    //  Loop winners and send private messages
    for (const userId of winnerIds) {
      const winnerRecord = await masterPrisma.gameOngoingUsers.findFirst({
        where: { userId },
        select: {
          socketId: true,  // must be socketId: true
          token: true
        },
      });

      if (!winnerRecord) {
        console.log("DB record not found for:", userId);
        continue;
      }
      let socketId = winnerRecord.socketId;

      const winningMessage = {
        userId,
        winningAmount: expectedWinningAmount[userId] // correct amount
      };
      if (socketId) {
        this.server.to(socketId).emit("toWinnerMessage", winningMessage);
      }
      try {

        let submitFlowData = {
          "betAmount": expectedWinningAmount[userId],
          "type": 2,
          "transactionId": uuidv4()
        }
        const baseURL = "https://my.wavegames.online/"
        const endPoint = "admin/game/submitFlow";
        const response = await axios.post(
          `${baseURL}${endPoint}`, submitFlowData, {
          headers: {
            'Authorization': `Bearer ${winnerRecord.token}`,
            'Content-Type': 'application/json',
          },
          timeout: 1000,
        }
        );
        if (response.statusText == "OK") {
          //added     
        } else {
          console.log("Failed to add win amount")
        }

      } catch (error) {
        if (error.response) {
          console.log("Status:", error.response.status);
          console.log("Message:", error.response.data);
        } else {
          console.log("Error:", error.message);
        }
      }
    }
    const winnersDbRecords = await masterPrisma.gameOngoingUsers.findMany({
      where: {
        userId: { in: winnerIds },  // winnerIds = Object.keys(expectedWinningAmount)
      },
      select: {
        userId: true,
        profilePicture: true,
        // socketId: true,  
      },
    });
    const winnersUserResponse = winnersDbRecords.map(user => ({
      userId: user.userId,
      amountWon: expectedWinningAmount[user.userId] || 0,
      gameId: 16,
      imageProfile: user.profilePicture || null,
    }));

    let potName;
    if (winningPotIndex == 0) {
      potName = "Pot 1"
    } else if (winningPotIndex == 1) {
      potName = "Pot 1"
    } else if (winningPotIndex == 2) {
      potName = "Pot 3"
    }
    // Public broadcast response
    const response = {
      success: true,
      message: 'Winners announced successfully',
      data: {
        winners: winnersUserResponse,
        winningPot: potName,
        winningPotIndex: winningPotIndex,
        winningCards: [
          'https://deckofcardsapi.com/static/img/AS.png',
          'https://deckofcardsapi.com/static/img/2S.png',
          'https://deckofcardsapi.com/static/img/3S.png',
        ],
        winningPotRankText: 'Pair',
      },
    };
    this.server.emit('teenpattiAnnounceGameResultResponse', response);
    // refresh for next game
    await masterPrisma.ongoingTeenpattiGame.deleteMany({});

    return response;
  }

  // @SubscribeMessage('teenpattiGameTableJoin')
  // async gameTeenpattiJoin(
  //  @ConnectedSocket() client: Socket, 
  //   @MessageBody() user: any
  // ) {  
  //   const existingUser = this.Users.find(u => u.userId === user.userId);

  //   if (!existingUser) {
  //     this.Users.unshift(user);
  //   } else {
  //     console.log(`User ${user.name} already in game table`);
  //   }
  //   client.join('teenPattiGame');
  //   this.server.to('teenPattiGame').emit('teenpattiGameTableUpdate', { 
  //     users: this.Users 
  //   });

  //   return { success: true, users: this.Users };
  // }
  @SubscribeMessage('teenpattiGameTableJoin')
async gameTeenpattiJoin(
  @ConnectedSocket() client: Socket,
  @MessageBody() user: {
    userId: string;
    name: string;
    imageProfile: string;
    appKey: string;
    token: string;
  }
) {
  try {
    const userId = String(user.userId);

    // ✅ SAFE UPSERT
    await masterPrisma.gameOngoingUsers.upsert({
      where: { userId },
      update: {
        name: user.name,
        profilePicture: user.imageProfile,
        appKey: user.appKey,
      },
      create: {
        userId,
        name: user.name,
        profilePicture: user.imageProfile,
        appKey: user.appKey,
      },
    });

    const dummyPlayers = [
      { userId: 'gzvISjgXLW', name: 'Alex', profilePicture: 'https://randomuser.me/api/portraits/women/1.jpg' },
      { userId: 'sdBPg21sbL', name: 'Max', profilePicture: 'https://randomuser.me/api/portraits/men/2.jpg' },
      { userId: 'EscjvllJMV', name: 'Zabir', profilePicture: 'https://randomuser.me/api/portraits/men/3.jpg' },
      { userId: 'YZPiqFzhZ1', name: 'Waseem', profilePicture: 'https://randomuser.me/api/portraits/men/4.jpg' },
    ];

    const usersInGame = await masterPrisma.gameOngoingUsers.findMany();
    const combinedUsers = [...usersInGame, ...dummyPlayers];

    // ✅ Single room for table
    client.join('teenPattiGame');

    this.server.to('teenPattiGame').emit('teenpattiGameTableUpdate', {
      users: combinedUsers,
    });

    return { success: true, users: combinedUsers };

  } catch (err: any) {
    console.error('Teen Patti Join Error:', err);
    return { success: false, users: [], message: err.message };
  }
}


  // @SubscribeMessage('mySocketId')
  // async mySocketId(
  //   @ConnectedSocket() client: Socket,
  //   @MessageBody() data: any
  // ) {
  //   const { userId } = data;

  //   // Find user
  //   const userIndex = this.Users.findIndex(u => u.userId === userId);
  //   if (userIndex === -1) {
  //     return { success: false, message: "User not found" };
  //   }
  //     this.Users[userIndex].socketId = client.id;
  //   client.emit("socketIdSaved", {
  //     success: true,
  //     user: this.Users[userIndex],
  //   });

  //   return {
  //     success: true,
  //     user: this.Users[userIndex]
  //   };
  // }
  // @SubscribeMessage('mySocketId')
  // async mySocketId(
  //   @ConnectedSocket() client: Socket,
  //   @MessageBody() data: any
  // ) {
  //   const { userId } = data;

  //   if (!userId) {
  //     return { success: false, message: "userId is required" };
  //   }

  //   try {
  // // Update the socketId for this user in master database
  // const updatedUser = await masterPrisma.gameOngoingUsers.updateMany({
  //   where: { userId },
  //   data: { socketId: client.id },
  // });

  // // Fetch the updated user
  // const user = await masterPrisma.gameOngoingUsers.findUnique({
  //   where: { userId },
  // });

  // if (!user) {
  //   return { success: false, message: "User not found in database" };
  // }

  // // Emit back to the socket
  // client.emit("socketIdSaved", {
  //   success: true,
  //   user,
  // });

  // return {
  //   success: true,
  //   user,
  // };

  //   } catch (err) {
  //     console.error("Failed to update socketId:", err);
  //     return { success: false, message: "Failed to update socketId", error: err.message };
  //   }
  // }


  // @SubscribeMessage('teenpattiGameTableLeave')
  // async gameTeenpattiLeave(
  //   @ConnectedSocket() client: Socket,
  //   @MessageBody() user: any
  // ) {
  //   this.Users = this.Users.filter(u => u.userId !== user.userId);
  //   client.leave('teenPattiGame');

  //   this.server.to('teenPattiGame').emit('teenpattiGameTableUpdate', { 
  //     users: this.Users 
  //   });

  //   return { success: true, users: this.Users };
  // }

  @SubscribeMessage('teenpattiGameTableLeave')
  async gameTeenpattiLeave(
    @ConnectedSocket() client: Socket,
    @MessageBody() user: any
  ) {
    const { userId } = user;

    if (!userId) {
      return { success: false, message: "userId is required" };
    }

    try {
      // Delete the user from the master database table
      await masterPrisma.gameOngoingUsers.deleteMany({
        where: { userId },
      });
      client.leave('teenPattiGame');

      // Fetch remaining users to emit the updated table
      const remainingUsers = await masterPrisma.gameOngoingUsers.findMany({
        select: {
          userId: true,
          name: true,
          profilePicture: true,
        },
      });

      this.server.to('teenPattiGame').emit('teenpattiGameTableUpdate', {
        users: remainingUsers,
      });

      return { success: true, users: remainingUsers };
    } catch (err) {
      console.error("Failed to remove user from database:", err);
      return { success: false, message: "Failed to remove user", error: err.message };
    }
  }


  // @SubscribeMessage('userUpdatedData')
  // async getUserData() {
  //   const response = {
  //     success: true,
  //     message: 'User data fetched successfully',
  //     data: {
  //       user: [
  //         {
  //           userId: 'user_123',
  //           balance: 1500,
  //           gameId: 16,
  //           imageProfile: 'https://randomuser.me/api/portraits/men/75.jpg',
  //         },
  //         {
  //           userId: 'user_345',
  //           balance: 1500,
  //           gameId: 16,
  //           imageProfile: 'https://randomuser.me/api/portraits/men/75.jpg',
  //         }
  //       ],
  //     },
  //   };

  //   if (this.server) {
  //     this.server.emit('userUpdatedDataResponse', response);
  //   }
  //   return response;
  // }

  // @SubscribeMessage('teenpattiPotBetsAndUsers')
  // async getPotBetsAndUsers(@MessageBody() { gameId }: { gameId: number }) {
  //   const potsAndUsers = {
  //     16: {
  //       pots: [
  //         { potName: 'pot1', betCoins: [50, 100, 100, 200, 500, 100, 50, 200], totalBetAmount: 1300 },
  //         { potName: 'pot2', betCoins: [100, 100, 200, 50, 500, 100], totalBetAmount: 1050 },
  //         { potName: 'pot3', betCoins: [50, 100, 100, 500, 200], totalBetAmount: 950 },
  //       ],
  //       users: this.Users,
  //     },
  //     42: {
  //       pots: [
  //         { potName: 'pot1', betCoins: [10, 50, 100, 200], totalBetAmount: 360 },
  //         { potName: 'pot2', betCoins: [25, 25, 50], totalBetAmount: 100 },
  //       ],
  //       users: [
  //         { userId: 'user_201', name: 'David', imageProfile: 'https://randomuser.me/api/portraits/men/80.jpg' },
  //         { userId: 'user_202', name: 'Eva', imageProfile: 'https://randomuser.me/api/portraits/women/81.jpg' },
  //       ],
  //     },
  //   };

  //   const result = potsAndUsers[gameId];

  //   if (!result) {
  //     const response = {
  //       success: false,
  //       message: `No pot or user data found for gameId ${gameId}`,
  //       data: null,
  //     };
  //     this.server.emit('teenpattiPotBetsAndUsersResponse', response);
  //     return response;
  //   }

  //   const response = {
  //     success: true,
  //     message: 'Game bets fetched successfully',
  //     data: result,
  //   };

  //   this.server.emit('teenpattiPotBetsAndUsersResponse', response);
  //   return response;
  // }
}