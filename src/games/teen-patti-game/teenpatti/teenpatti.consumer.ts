import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { KafkaService } from 'src/kafka/kafka.service';
import { SocketGateway } from 'src/socket/socket.gateway';

@Injectable()
export class TeenpattiConsumer implements OnModuleInit {
  private readonly logger = new Logger(TeenpattiConsumer.name);
  private processedCount = 0;
  private startTime = Date.now();
  private processingErrors = 0;

  constructor(
    private readonly kafka: KafkaService,
    private readonly socketGateway: SocketGateway,
  ) {
    // Log processing metrics every 5 seconds
    setInterval(() => this.logMetrics(), 5000);
  }

  async onModuleInit() {
    await this.kafka.createConsumer(
      'teenpatti-engine',
      ['game.teenpatti.bets'],
      async (bet) => {
        await this.processBet(bet);
      },
      false, // Don't read from beginning
    );

    this.logger.log('🎮 Teen Patti Consumer started and ready to process bets');
  }

  /**
   * Process individual bet
   * This runs in parallel for each partition
   */
  private async processBet(bet: any) {
    const startTime = Date.now();

    try {
      // 1. Validate bet
      if (!bet.userId || !bet.amount || !bet.tableId) {
        throw new Error('Invalid bet data');
      }

      // 2. Run game logic (simulate processing)
      const result = await this.runGameLogic(bet);

      // 3. Update database (you'll implement this)
      // await this.saveBetToDatabase(bet, result);

      // 4. Broadcast result to all players at the table
      this.socketGateway.broadcastBetResult(bet.tableId, {
        betId: bet.betId,
        userId: bet.userId,
        amount: bet.amount,
        result: result.outcome,
        winAmount: result.winAmount,
        timestamp: Date.now(),
        processingTime: Date.now() - startTime,
      });

      // 5. Log for monitoring
      this.processedCount++;
      
      if (this.processedCount % 1000 === 0) {
        this.logger.log(`✅ Processed ${this.processedCount} bets`);
      }

    } catch (error) {
      this.processingErrors++;
      this.logger.error(
        `❌ Error processing bet ${bet.betId}: ${error.message}`,
        error.stack,
      );

      // Notify user of error
      this.socketGateway.broadcastToTable(bet.tableId, 'betError', {
        betId: bet.betId,
        userId: bet.userId,
        error: error.message,
        timestamp: Date.now(),
      });
    }
  }

  /**
   * Game logic simulation
   * Replace this with your actual Teen Patti game engine
   */
  private async runGameLogic(bet: any): Promise<{
    outcome: 'win' | 'lose' | 'draw';
    winAmount: number;
    cards?: any[];
  }> {
    // Simulate processing time (remove in production)
    // await new Promise(resolve => setTimeout(resolve, 1));

    // Simulate game outcome (replace with real logic)
    const random = Math.random();
    
    if (random < 0.45) {
      return {
        outcome: 'win',
        winAmount: bet.amount * 2,
        cards: this.generateRandomCards(),
      };
    } else if (random < 0.90) {
      return {
        outcome: 'lose',
        winAmount: 0,
        cards: this.generateRandomCards(),
      };
    } else {
      return {
        outcome: 'draw',
        winAmount: bet.amount,
        cards: this.generateRandomCards(),
      };
    }
  }

  /**
   * Generate random cards for demo
   */
  private generateRandomCards() {
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    
    return Array(3).fill(null).map(() => ({
      suit: suits[Math.floor(Math.random() * suits.length)],
      rank: ranks[Math.floor(Math.random() * ranks.length)],
    }));
  }

  /**
   * Save bet to database (implement this)
   */
  private async saveBetToDatabase(bet: any, result: any) {
    // TODO: Implement database save
    // Example:
    // await this.prisma.bet.create({
    //   data: {
    //     betId: bet.betId,
    //     userId: bet.userId,
    //     amount: bet.amount,
    //     tableId: bet.tableId,
    //     outcome: result.outcome,
    //     winAmount: result.winAmount,
    //     timestamp: new Date(bet.timestamp),
    //   },
    // });
  }

  /**
   * Log processing metrics
   */
  private logMetrics() {
    const elapsed = (Date.now() - this.startTime) / 1000;
    const betsPerSecond = Math.round(this.processedCount / elapsed);
    const errorRate = ((this.processingErrors / this.processedCount) * 100).toFixed(2);

    if (this.processedCount > 0) {
      this.logger.log(
        `📊 Consumer Metrics: ${betsPerSecond} bets/sec | ` +
        `Total: ${this.processedCount} | Errors: ${this.processingErrors} (${errorRate}%)`
      );
    }
  }

  getMetrics() {
    const elapsed = (Date.now() - this.startTime) / 1000;
    return {
      processed: this.processedCount,
      errors: this.processingErrors,
      betsPerSecond: Math.round(this.processedCount / elapsed),
      elapsedTime: elapsed,
    };
  }

  resetMetrics() {
    this.processedCount = 0;
    this.processingErrors = 0;
    this.startTime = Date.now();
  }
}