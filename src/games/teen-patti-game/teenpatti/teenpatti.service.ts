import { Injectable, Logger } from '@nestjs/common';
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

  constructor() {
    setInterval(() => this.logThroughput(), 5000);
  }
  @WebSocketServer()
  server: Server;

  // ✅ Required WebSocket lifecycle methods
  afterInit(server: Server) {
  }

  async handleConnection(client: Socket) {
    const userId = String(client.handshake.query.userId ?? '');
    const appKey = String(client.handshake.query.appKey ?? '');
    const token = String(client.handshake.query.token ?? '');
    // if ( token) {
    //   console.log('Missing userId or appKey');
    //   return;
    // }


    try {
      // 🔒 prevent duplicate execution per socket
      if (client.data.initialized) return;
      client.data.initialized = true;

      await masterPrisma.$transaction(async (tx) => {
        const existing = await tx.gameOngoingUsers.findUnique({
          where: { userId },
        });

        if (existing) {
          await tx.gameOngoingUsers.update({
            where: { userId },
            data: {
              socketId: client.id,
              appKey,
              token,
              updatedAt: new Date(),
            },
          });
        } else {
          await tx.gameOngoingUsers.create({
            data: {
              userId,
              socketId: client.id,
              appKey,
              token
            },
          });
        }
      });
      await client.join(`user:${userId}`);

    } catch (err) {
      if (err.code === 'P2002') {
        console.warn(`Duplicate connection ignored for userId ${userId}`);
        return;
      }

      console.error('DB error:', err);
    }

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
  public potTotalBets: Record<number, number> = {
    0: 0,
    1: 0,
    2: 0,
  };
  public winningPotHistory: string[] = [];


  public Users = [
    { userId: 'user_101', name: 'Alice', imageProfile: 'https://randomuser.me/api/portraits/women/55.jpg', socketId: "" },
    { userId: 'user_102', name: 'Bob', imageProfile: 'https://randomuser.me/api/portraits/men/98.jpg', socketId: "" },
    { userId: 'user_103', name: 'Charlie', imageProfile: 'https://randomuser.me/api/portraits/men/78.jpg', socketId: "" },
    // { userId: 'user_105', name: 'Max', imageProfile: 'https://randomuser.me/api/portraits/men/68.jpg' },
    // { userId: 'user_108', name: 'Alex', imageProfile: 'https://randomuser.me/api/portraits/men/70.jpg' },
    // { userId: 'user_108', name: 'Alex', imageProfile: 'https://randomuser.me/api/portraits/men/70.jpg' },

  ]
  @SubscribeMessage('teenPattiTimer')
  async startTimers() {
    if (this.running) return; // prevent duplicate loops
    this.running = true;


    const phases = [
      { name: 'bettingTimer', duration: 20 },
      { name: 'winningCalculationTimer', duration: 3 },
      { name: 'resultAnnounceTimer', duration: 6 },
      { name: 'newGameStartTimer', duration: 3 },
    ];

    while (true) {
      this.announceWinningSent = false;
      for (const phase of phases) {
        for (let remaining = phase.duration; remaining >= 0; remaining--) {
          // broadcast remaining seconds to all clients
          if (phase.name !== 'winningCalculationTimer') {
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
        if (phase.name === 'winningCalculationTimer' && !this.announceWinningSent) {
          this.announceWinningSent = true;
          await this.announceGameResult();
        }
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
      tenantBaseURL?: string;
    },
  ) {
    const betId = uuidv4();
    const timestamp = Date.now();

    const { userId, amount, betType, token, gameId, potIndex, tenantBaseURL } = bet;

    const submitFlowData = {
      betAmount: amount,
      type: betType,
      transactionId: betId,
    };
    let socketID = '';
    let message = '';
    let apiData: any;
    const userSocketId = await masterPrisma.gameOngoingUsers.findFirst({
        where: { userId },
        select: { socketId: true },
      });

      if (!userSocketId?.socketId) {
        console.log('SocketId not found for userId:', userId);
        return;
      }

    socketID = userSocketId.socketId;
    try {
      // 🔹 API CALL
      const response = await axios.post(
        `${tenantBaseURL}/wave/game/submitFlow`,
        submitFlowData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          timeout: 4000,
        },
      );

      apiData = response.data;

      // 🔹 GET SOCKET ID
    

      if (apiData.success === false) {
        this.server.to(`user:${userId}`).emit('teenpattiBetResponse', {
          success: false,
          message: apiData.message,
          data: {
            ...apiData.data,
            potIndex,
            amount,
          },
        });
      }

      // 🔹 SUCCESS
      if (response.data?.success === true) {
        const index = Number(potIndex);
        this.potTotalBets[index] = (this.potTotalBets[index] ?? 0) + amount;
        this.server.emit('potTotalBets', this.potTotalBets);
        this.server.to(`user:${userId}`).emit('teenpattiBetResponse', {
          success: true,
          message: apiData.message,
          data: {
            ...apiData.data,
            potIndex,
            amount,
          },
        });


        // this.server.to(socketID).emit('teenpattiBetResponse', {
        //   success: true,
        //   message: apiData.message,
        //   data: {
        //     ...apiData.data,
        //     potIndex,
        //     amount,
        //   },
        // });

        // POT NAME
        let potName = '';
        if (bet.potIndex === 0) potName = 'Pot 1';
        else if (bet.potIndex === 1) potName = 'Pot 2';
        else if (bet.potIndex === 2) potName = 'Pot 3';

        // 🔹 SAVE DB
        if (bet.gameId === '16') {
          await masterPrisma.ongoingTeenpattiGame.create({
            data: {
              potIndex: Number(bet.potIndex),
              userId: bet.userId,
              amount: bet.amount,
              type: bet.betType,
              potName,
              appKey: bet.appKey || null,
            },
          });
        }
      } else {
        this.server.to(`user:${userId}`).emit('teenpattiBetResponse', {
          success: false,
          message: apiData.message,
          data: {
            ...apiData.data,
            potIndex,
            amount,
          },
        });
      }

      return {
        success: apiData.success,
        message: apiData.message,
        data: {
          betId,
          timestamp,
        },
      };
    } catch (err: any) {
      console.error('Error placing bet:', err.message,"eror code:",err.code);
      message = 'Requested server failed to respond';

      if (err.code === 'ECONNABORTED') {
        message = 'Requested server timeout';
      } else if (!err.response) {
        message = 'Requested server is unavailable';
      } else if (err.message) {
        message = err.message;
      }
      console.log('socketID:', socketID);
      if (socketID) {
        // 
      this.server.to(`user:${userId}`).emit('teenpattiBetResponse', { success: false, message });
      }
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

  // public teenpattiGameProbability(): number {
  //   const options = [0, 1, 2];
  //   const randomIndex = Math.floor(Math.random() * options.length);
  //   return options[randomIndex];
  // }
  teenpattiGameProbability(): number {

    const MAX_HISTORY = 10;

    const winningProbablityChance = {
      low: 0.4,
      medium: 0.4,
      high: 0.2,
    };

    /**
     * 1️⃣ Determine LOW / MEDIUM / HIGH dynamically
     * pot index can be anything
     */
    const sortedPots = Object.entries(this.potTotalBets)
      .map(([index, amount]) => ({
        index: Number(index),
        amount: Number(amount),
      }))
      .sort((a, b) => a.amount - b.amount);

    // safety check
    if (sortedPots.length !== 3) {
      throw new Error('Exactly 3 pots are required');
    }

    const categoryMap: Record<'low' | 'medium' | 'high', number> = {
      low: sortedPots[0].index,      // lowest bet pot
      medium: sortedPots[1].index,   // middle bet pot
      high: sortedPots[2].index,     // highest bet pot
    };

    /**
     * 2️⃣ Count last 10 winning categories
     */
    const historyCount = {
      low: 0,
      medium: 0,
      high: 0,
    };

    for (const h of this.winningPotHistory) {
      if (historyCount[h] !== undefined) {
        historyCount[h]++;
      }
    }

    /**
     * 3️⃣ Max allowed wins in last 10
     */
    const maxAllowed = {
      low: Math.round(winningProbablityChance.low * MAX_HISTORY),       // 4
      medium: Math.round(winningProbablityChance.medium * MAX_HISTORY), // 4
      high: Math.round(winningProbablityChance.high * MAX_HISTORY),     // 2
    };

    /**
     * 4️⃣ Eligible categories (not exceeding quota)
     */
    let eligibleCategories = (Object.keys(maxAllowed) as Array<'low' | 'medium' | 'high'>)
      .filter(cat => historyCount[cat] < maxAllowed[cat]);

    // fallback (rare case)
    if (eligibleCategories.length === 0) {
      eligibleCategories = ['low', 'medium', 'high'];
    }

    /**
     * 5️⃣ Weighted random selection
     */
    const totalWeight = eligibleCategories
      .reduce((sum, cat) => sum + winningProbablityChance[cat], 0);

    let rand = Math.random() * totalWeight;

    let selectedCategory: 'low' | 'medium' | 'high' = eligibleCategories[0];
    for (const cat of eligibleCategories) {
      rand -= winningProbablityChance[cat];
      if (rand <= 0) {
        selectedCategory = cat;
        break;
      }
    }

    /**
     *  Save history (last 10)
     */
    this.winningPotHistory.push(selectedCategory);
    if (this.winningPotHistory.length > MAX_HISTORY) {
      this.winningPotHistory.shift();
    }

    return categoryMap[selectedCategory];
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
  ///winning probability
  private readonly SUITS = ['S', 'H', 'D', 'C'];
  private readonly RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K'];

  public buildDeck(): string[] {
    const deck: string[] = [];
    for (const r of this.RANKS) {
      for (const s of this.SUITS) {
        deck.push(`${r}${s}.png`);
      }
    }
    return deck;
  }
  private rankValue(card: string): number {
    const r = card[0];
    if (r === 'A') return 14;
    if (r === '0') return 10;
    if (r === 'J') return 11;
    if (r === 'Q') return 12;
    if (r === 'K') return 13;
    return parseInt(r);
  }
  private isSequence(cards: string[]): boolean {
    const ranks = cards
      .map(c => this.rankValue(c))
      .sort((a, b) => a - b);

    // Normal sequence
    if (ranks[1] === ranks[0] + 1 && ranks[2] === ranks[1] + 1) return true;

    // A-2-3 special case
    return ranks.includes(14) && ranks.includes(2) && ranks.includes(3);
  }
  private isFlush(cards: string[]): boolean {
    return new Set(cards.map(c => this.suitOf(c))).size === 1;
  }

  private suitOf(card: string): string {
    return card[1];
  }

  public shuffle<T>(arr: T[]): T[] {
    return arr.sort(() => Math.random() - 0.5);
  }

  public draw(deck: string[], count: number): string[] {
    return deck.splice(0, count);
  }

  public rankOf(card: string): string {
    return card[0]; // "A", "9", "0", "K"
  }
  public createPairHand(deck: string[]): string[] {
    while (true) {
      const rankGroups: Record<string, string[]> = {};

      deck.forEach(card => {
        const r = card[0];
        rankGroups[r] = rankGroups[r] || [];
        rankGroups[r].push(card);
      });

      const pairRank = Object.keys(rankGroups).find(r => rankGroups[r].length >= 2);
      if (!pairRank) continue;

      const pairCards = rankGroups[pairRank].slice(0, 2);

      const kicker = deck.find(
        c =>
          c[0] !== pairRank &&
          !this.isSequence([...pairCards, c]) &&
          !this.isFlush([...pairCards, c])
      );

      if (!kicker) continue;

      deck.splice(deck.indexOf(pairCards[0]), 1);
      deck.splice(deck.indexOf(pairCards[1]), 1);
      deck.splice(deck.indexOf(kicker), 1);

      return [...pairCards, kicker];
    }
  }
  public createHighCardHand(deck: string[]): string[] {
    while (true) {
      const cards = deck.splice(0, 3);

      const ranks = cards.map(c => c[0]);
      const uniqueRanks = new Set(ranks);

      if (
        uniqueRanks.size === 3 &&
        !this.isSequence(cards) &&
        !this.isFlush(cards)
      ) {
        return cards;
      }

      deck.push(...cards);
      this.shuffle(deck);
    }
  }
  public generateTeenPattiResult() {
    const deck = this.shuffle(this.buildDeck());

    const winnerCards = this.createPairHand(deck);
    const loserCardsA = this.createHighCardHand(deck);
    const loserCardsB = this.createHighCardHand(deck);

    return {
      winner: {
        cards: winnerCards,
        losers: {
          cardsA: loserCardsA,
          cardsB: loserCardsB
        }
      }
    };
  }

  @SubscribeMessage('teenpattiAnnounceGameResult')
  async announceGameResult() {
    let winningPotIndex = this.teenpattiGameProbability();
    const result = this.generateTeenPattiResult();

    let winnningExpPercentage = {
      0: 2.9,
      1: 2.9,
      2: 2.9
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
        winningAmount: expectedWinningAmount[userId], // correct amount
        betType: 2,
        winningPotIndex
      };
      if (socketId) {
        this.server.to(`user:${userId}`).emit("toWinnerMessage", winningMessage);
      }
      try {

        let submitFlowData = {
          "betAmount": expectedWinningAmount[userId],
          "type": 2,
          "transactionId": uuidv4()
        }

        const baseURL = "https://joygames.ricolivee.vip/"
        const endPoint = "wave/game/submitFlow";
        const response = await axios.post(
          `${baseURL}${endPoint}`, submitFlowData, {
          headers: {
            'Authorization': `Bearer ${winnerRecord.token}`,
            'Content-Type': 'application/json',
          },
          timeout: 3000,
        }
        );

        if (response.statusText == "OK") {
          //added     
        } else {
          console.log("Failed to add win amount")
        }

            } catch (err: any) {
        let message = 'Requested server failed to respond';

        if (err.code === 'ECONNABORTED') {
          message = 'Requested server timeout';
        } else if (!err.response) {
          message = 'Requested server is unavailable';
        } else if (err.response?.data?.message) {
          message = err.response.data.message;
        } else if (err.message) {
          message = err.message;
        }
        if (socketId) {
          this.server.to(`user:${userId}`).emit('teenpattiBetResponse', { success: false, message });
        }
      }

    }
    const winnersDbRecords = await masterPrisma.gameOngoingUsers.findMany({
      where: {
        userId: { in: winnerIds },  // winnerIds = Object.keys(expectedWinningAmount)
      },
      select: {
        userId: true,
        name: true,
        profilePicture: true,
        // socketId: true,  
      },
    });
    const REQUIRED_WINNERS = 3;

    let winnersUserResponse = winnersDbRecords.map(user => ({
      userId: user.userId,
      name: user.name,
      amountWon: expectedWinningAmount[user.userId] || 0,
      gameId: 16,
      imageProfile: user.profilePicture || null,
    }));
    if (winnersUserResponse.length < REQUIRED_WINNERS) {
      const needed = REQUIRED_WINNERS - winnersUserResponse.length;

      // avoid duplicate userIds
      const existingIds = new Set(winnersUserResponse.map(w => w.userId));
      const potValues = Object.values(this.potTotalBets);
      const minPot = Math.min(...potValues);
      const maxPot = Math.max(...potValues);
      const getRandomAmount = (min = 2000, max = 70000) =>
        Math.floor(Math.random() * (max - min + 1)) + min;

      const fakeWinners = this.Users
        .filter(u => !existingIds.has(u.userId))
        .slice(0, needed)
        .map(u => ({
          userId: u.userId,
          name: u.name,
          amountWon: getRandomAmount(minPot, maxPot),
          gameId: 16,
          imageProfile: u.imageProfile,
        }));

      winnersUserResponse = [
        ...winnersUserResponse,
        ...fakeWinners,
      ];
    }
    let potName;
    if (winningPotIndex == 0) {
      potName = "Pot A"
    } else if (winningPotIndex == 1) {
      potName = "Pot B"
    } else if (winningPotIndex == 2) {
      potName = "Pot C"
    }

    // Public broadcast response
    const response = {
      success: true,
      message: 'Winners announced successfully',
      data: {
        winners: winnersUserResponse,
        winningPot: potName,
        winningPotIndex: winningPotIndex,
        winningCards: result.winner.cards,
        loserCards: result.winner.losers,
        winningPotRankText: 'Pair',
      },
    };
    this.server.emit('teenpattiAnnounceGameResultResponse', response);
    // refresh for next game
    await masterPrisma.ongoingTeenpattiGame.deleteMany({});
    this.potTotalBets = {
      0: 0,
      1: 0,
      2: 0,
    };
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
      let userSocketId = await masterPrisma.gameOngoingUsers.findFirst({
        where: { userId },
        select: {
          socketId: true,
        },
      });
      if (!userSocketId || !userSocketId.socketId) {
        return;
      }
      this.server.emit('teenpattiGameTableUpdate', {
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
