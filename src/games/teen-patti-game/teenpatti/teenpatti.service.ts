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
    // Log throughput every 5 seconds
    setInterval(() => this.logThroughput(), 5000);
  }
  @WebSocketServer()
  server: Server;

  // ✅ Required WebSocket lifecycle methods
  afterInit(server: Server) {
    console.log(' Teenpatti Gateway Initialized');
  }

  handleConnection(client: Socket) {
    console.log(` Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  public running = false;
  public Users = [
    { userId: 'user_101', name: 'Alice', imageProfile: 'https://randomuser.me/api/portraits/women/65.jpg',socketId:"" },
    { userId: 'user_102', name: 'Bob', imageProfile: 'https://randomuser.me/api/portraits/men/66.jpg',socketId:"" },
    { userId: 'user_103', name: 'Charlie', imageProfile: 'https://randomuser.me/api/portraits/men/67.jpg',socketId:"" },
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
        console.log(`Starting phase: ${phase.name}`);
        for (let remaining = phase.duration; remaining >= 0; remaining--) {
          // broadcast remaining seconds to all clients
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
      socketId: string

    }) {
    const betId = uuidv4();
    const timestamp = Date.now();
    const { userId, amount, betType, appKey, token, gameId, potIndex, socketId } = bet
    console.log("socketId:", socketId)
    //call api
    let submitFlowData = {
      "betAmount": amount,
      "type": betType,
      "transactionId": betId
    }
    const baseURL = "http://127.0.0.1:4005/"
    const endPoint = "admin/game/submitFlow";
    const response = await axios.post(
      `${baseURL}${endPoint}`, submitFlowData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      timeout: 1000,
    }
    );
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

      this.server.to(socketId).emit('teenpattiBetResponse', {
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
      throw error;
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

  @SubscribeMessage('teenpattiAnnounceGameResult')
async announceGameResult() {
  let winnerIds = ["user_123", "user_103"];

  // Loop winners and send private messages
  for (const userId of winnerIds) {
    const winner = this.Users.find(u => u.userId === userId);
    console.log("winnerRecord:",winner)
    if (!winner ) {
      console.log("Socket not found for:", userId);
      continue;
    }

    const winningMessage = {
      userId: winner.userId,
      winningAmount: 150
    };
    console.log("winner:",winner)
    // Send ONLY to this winner
    this.server.emit("toWinnerMessage", winningMessage);

    console.log("Message sent to winner:", winner.userId, "Socket:", winner.socketId);
  }

  // Public broadcast response
  const response = {
    success: true,
    message: 'Winners announced successfully',
    data: {
      winners: [
        {
          userId: 'user_123',
          amountWon: 1500,
          gameId: 16,
          imageProfile: 'https://randomuser.me/api/portraits/men/75.jpg',
        },
      ],
      winningPot: 'pot1',
      winningPotIndex: 0,
      winningCards: [
        'https://deckofcardsapi.com/static/img/AS.png',
        'https://deckofcardsapi.com/static/img/2S.png',
        'https://deckofcardsapi.com/static/img/3S.png',
      ],
      winningPotRankText: 'Pair',
    },
  };

  this.server.emit('teenpattiAnnounceGameResultResponse', response);

  return response;
}

@SubscribeMessage('teenpattiGameTableJoin')
async gameTeenpattiJoin(
 @ConnectedSocket() client: Socket, 
  @MessageBody() user: any
) {  
  const existingUser = this.Users.find(u => u.userId === user.userId);

  if (!existingUser) {
    this.Users.unshift(user);
  } else {
    console.log(`User ${user.name} already in game table`);
  }
  client.join('teenPattiGame');
  this.server.to('teenPattiGame').emit('teenpattiGameTableUpdate', { 
    users: this.Users 
  });
  
  return { success: true, users: this.Users };
}


@SubscribeMessage('mySocketId')
async mySocketId(
  @ConnectedSocket() client: Socket,
  @MessageBody() data: any
) {
  const { userId } = data;

  // Find user
  const userIndex = this.Users.findIndex(u => u.userId === userId);
  if (userIndex === -1) {
    return { success: false, message: "User not found" };
  }
    this.Users[userIndex].socketId = client.id;
  client.emit("socketIdSaved", {
    success: true,
    user: this.Users[userIndex],
  });

  return {
    success: true,
    user: this.Users[userIndex]
  };
}

@SubscribeMessage('teenpattiGameTableLeave')
async gameTeenpattiLeave(
  @ConnectedSocket() client: Socket,
  @MessageBody() user: any
) {
  this.Users = this.Users.filter(u => u.userId !== user.userId);
  client.leave('teenPattiGame');
  
  this.server.to('teenPattiGame').emit('teenpattiGameTableUpdate', { 
    users: this.Users 
  });
  
  return { success: true, users: this.Users };
}

  @SubscribeMessage('userUpdatedData')
  async getUserData() {
    const response = {
      success: true,
      message: 'User data fetched successfully',
      data: {
        user: [
          {
            userId: 'user_123',
            balance: 1500,
            gameId: 16,
            imageProfile: 'https://randomuser.me/api/portraits/men/75.jpg',
          },
          {
            userId: 'user_345',
            balance: 1500,
            gameId: 16,
            imageProfile: 'https://randomuser.me/api/portraits/men/75.jpg',
          }
        ],
      },
    };

    if (this.server) {
      this.server.emit('userUpdatedDataResponse', response);
    }
    return response;
  }

  @SubscribeMessage('teenpattiPotBetsAndUsers')
  async getPotBetsAndUsers(@MessageBody() { gameId }: { gameId: number }) {
    const potsAndUsers = {
      16: {
        pots: [
          { potName: 'pot1', betCoins: [50, 100, 100, 200, 500, 100, 50, 200], totalBetAmount: 1300 },
          { potName: 'pot2', betCoins: [100, 100, 200, 50, 500, 100], totalBetAmount: 1050 },
          { potName: 'pot3', betCoins: [50, 100, 100, 500, 200], totalBetAmount: 950 },
        ],
        users: this.Users,
      },
      42: {
        pots: [
          { potName: 'pot1', betCoins: [10, 50, 100, 200], totalBetAmount: 360 },
          { potName: 'pot2', betCoins: [25, 25, 50], totalBetAmount: 100 },
        ],
        users: [
          { userId: 'user_201', name: 'David', imageProfile: 'https://randomuser.me/api/portraits/men/80.jpg' },
          { userId: 'user_202', name: 'Eva', imageProfile: 'https://randomuser.me/api/portraits/women/81.jpg' },
        ],
      },
    };

    const result = potsAndUsers[gameId];

    if (!result) {
      const response = {
        success: false,
        message: `No pot or user data found for gameId ${gameId}`,
        data: null,
      };
      this.server.emit('teenpattiPotBetsAndUsersResponse', response);
      return response;
    }

    const response = {
      success: true,
      message: 'Game bets fetched successfully',
      data: result,
    };

    this.server.emit('teenpattiPotBetsAndUsersResponse', response);
    return response;
  }
}