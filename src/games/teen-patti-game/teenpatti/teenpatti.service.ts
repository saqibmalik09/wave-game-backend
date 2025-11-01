import { Injectable, Logger } from '@nestjs/common';
import { KafkaService } from 'src/kafka/kafka.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TeenpattiService {
  private readonly logger = new Logger(TeenpattiService.name);
  private betCount = 0;
  private startTime = Date.now();

  constructor(private readonly kafka: KafkaService) {
    // Log throughput every 5 seconds
    setInterval(() => this.logThroughput(), 5000);
  }

  async placeBet(bet: {
    userId: string;
    amount: number;
    tableId: string;
    betType?: string;
  }) {
    const betId = uuidv4();
    const timestamp = Date.now();

    const enrichedBet = {
      betId,
      ...bet,
      game: 'teenpatti',
      timestamp,
      status: 'pending',
    };

    try {
      // Produce to Kafka (async, non-blocking)
      await this.kafka.produce('teenpatti', enrichedBet);

      // Increment counter for metrics
      this.betCount++;

      return {
        success: true,
        message: 'Bet accepted for processing',
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
  async placeBetBatch(bets: Array<{
    userId: string;
    amount: number;
    tableId: string;
    betType?: string;
  }>) {
    const enrichedBets = bets.map(bet => ({
      betId: uuidv4(),
      ...bet,
      game: 'teenpatti',
      timestamp: Date.now(),
      status: 'pending',
    }));

    try {
      // Send all bets in parallel
      await Promise.all(
        enrichedBets.map(bet => this.kafka.produce('teenpatti', bet))
      );

      this.betCount += bets.length;

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
}