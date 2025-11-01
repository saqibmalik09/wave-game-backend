// // kafka.service.ts
// import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
// import { Kafka, Producer, Consumer, logLevel } from 'kafkajs';

// @Injectable()
// export class KafkaService implements OnModuleInit, OnModuleDestroy {
//   private readonly logger = new Logger(KafkaService.name);
//   private kafka: Kafka;
//   private producer: Producer;
//   private consumers: Map<string, Consumer> = new Map();
//   private isProducerConnected = false;

//   constructor() {
//     this.kafka = new Kafka({
//       clientId: 'wavegames-backend',
//       brokers: [`${process.env.KAFKA_BROKER}:${process.env.KAFKA_PORT}`],
//       logLevel: logLevel.INFO,
      
//       // Connection timeout and retry settings
//       connectionTimeout: 10000,
//       requestTimeout: 30000,
      
//       // Retry configuration for high availability
//       retry: {
//         initialRetryTime: 300,
//         retries: 10,
//         maxRetryTime: 30000,
//         multiplier: 2,
//         factor: 0.2,
//       },
//     });

//     this.producer = this.kafka.producer({
//       // High throughput settings
//       allowAutoTopicCreation: false,
//       transactionTimeout: 60000,
      
//       // Batching for performance
//       maxInFlightRequests: 5,
//       idempotent: true,
      
//       // Retry settings
//       retry: {
//         initialRetryTime: 300,
//         retries: 10,
//         maxRetryTime: 30000,
//       },
//     });
//   }

//   async onModuleInit() {
//     try {
//       await this.connectProducer();
//       this.logger.log('Kafka Producer connected successfully');
//     } catch (error) {
//       this.logger.error('Failed to connect Kafka Producer', error.stack);
//       // Retry connection in background
//       this.scheduleProducerReconnect();
//     }
//   }

//   async onModuleDestroy() {
//     try {
//       // Disconnect all consumers
//       for (const [groupId, consumer] of this.consumers.entries()) {
//         await consumer.disconnect();
//         this.logger.log(`Consumer ${groupId} disconnected`);
//       }
      
//       // Disconnect producer
//       if (this.isProducerConnected) {
//         await this.producer.disconnect();
//         this.logger.log('Kafka Producer disconnected');
//       }
//     } catch (error) {
//       this.logger.error('Error during Kafka shutdown', error.stack);
//     }
//   }

//   private async connectProducer() {
//     await this.producer.connect();
//     this.isProducerConnected = true;

//     // Handle producer events
//     this.producer.on('producer.connect', () => {
//       this.logger.log('Producer connected');
//       this.isProducerConnected = true;
//     });

//     this.producer.on('producer.disconnect', () => {
//       this.logger.warn('Producer disconnected');
//       this.isProducerConnected = false;
//       this.scheduleProducerReconnect();
//     });

//     this.producer.on('producer.network.request_timeout', (payload) => {
//       this.logger.warn('Producer request timeout', payload);
//     });
//   }

//   private scheduleProducerReconnect() {
//     setTimeout(async () => {
//       if (!this.isProducerConnected) {
//         this.logger.log('Attempting to reconnect producer...');
//         try {
//           await this.connectProducer();
//           this.logger.log('Producer reconnected successfully');
//         } catch (error) {
//           this.logger.error('Failed to reconnect producer', error.stack);
//           this.scheduleProducerReconnect();
//         }
//       }
//     }, 5000);
//   }

//   async produce(game: string, message: any): Promise<void> {
//     const topic = `game.${game}.bets`;
    
//     try {
//       if (!this.isProducerConnected) {
//         throw new Error('Producer is not connected');
//       }

//       await this.producer.send({
//         topic,
//         messages: [
//           {
//             key: message.userId || null,
//             value: JSON.stringify(message),
//             timestamp: Date.now().toString(),
//           },
//         ],
//         // Acknowledgment settings (must be -1 for idempotent producer)
//         acks: -1, // Wait for all in-sync replicas
//         timeout: 30000,
//       });

//       this.logger.debug(`Message produced to ${topic}`);
//     } catch (error) {
//       this.logger.error(`Failed to produce message to ${topic}`, error.stack);
//       throw error;
//     }
//   }

//   async createConsumer(
//     groupId: string,
//     topics: string[],
//     onMessage: (msg: any) => Promise<void>,
//   ): Promise<Consumer> {
//     const consumer = this.kafka.consumer({
//       groupId,
//       sessionTimeout: 30000,
//       heartbeatInterval: 3000,
//       // High throughput settings
//       maxBytesPerPartition: 1048576, // 1MB
//       maxWaitTimeInMs: 100,
      
//       // Retry settings
//       retry: {
//         initialRetryTime: 300,
//         retries: 10,
//         maxRetryTime: 30000,
//       },
//     });

//     try {
//       await consumer.connect();
//       this.logger.log(`Consumer ${groupId} connected`);

//       // Subscribe to topics
//       for (const topic of topics) {
//         await consumer.subscribe({
//           topic,
//           fromBeginning: false,
//         });
//         this.logger.log(`Consumer ${groupId} subscribed to ${topic}`);
//       }

//       // Run consumer
//       await consumer.run({
//         // Process multiple messages concurrently
//         partitionsConsumedConcurrently: 3,
        
//         eachMessage: async ({ topic, partition, message }) => {
//           try {
//             if (message.value) {
//               const parsedMessage = JSON.parse(message.value.toString());
//               await onMessage(parsedMessage);
//               this.logger.debug(`Message processed from ${topic} partition ${partition}`);
//             }
//           } catch (error) {
//             this.logger.error(
//               `Error processing message from ${topic} partition ${partition}`,
//               error.stack,
//             );
//             // Optionally: Send to dead letter queue or retry logic
//           }
//         },
//       });

//       // Handle consumer events
//       consumer.on('consumer.connect', () => {
//         this.logger.log(`Consumer ${groupId} connected`);
//       });

//       consumer.on('consumer.disconnect', () => {
//         this.logger.warn(`Consumer ${groupId} disconnected`);
//       });

//       consumer.on('consumer.crash', (error) => {
//         this.logger.error(`Consumer ${groupId} crashed`, error);
//       });

//       // Store consumer reference
//       this.consumers.set(groupId, consumer);

//       return consumer;
//     } catch (error) {
//       this.logger.error(`Failed to create consumer ${groupId}`, error.stack);
//       throw error;
//     }
//   }

//   // Health check method
//   async isHealthy(): Promise<boolean> {
//     return this.isProducerConnected;
//   }

//   // Get producer status
//   getProducerStatus(): boolean {
//     return this.isProducerConnected;
//   }

//   // Create topics programmatically if needed
//   async createTopics(topics: Array<{ topic: string; numPartitions?: number; replicationFactor?: number }>) {
//     const admin = this.kafka.admin();
    
//     try {
//       await admin.connect();
      
//       await admin.createTopics({
//         waitForLeaders: true,
//         topics: topics.map(t => ({
//           topic: t.topic,
//           numPartitions: t.numPartitions || 12,
//           replicationFactor: t.replicationFactor || 1,
//         })),
//       });
      
//       this.logger.log('Topics created successfully');
//       await admin.disconnect();
//     } catch (error) {
//       this.logger.error('Failed to create topics', error.stack);
//       await admin.disconnect();
//       throw error;
//     }
//   }
// }
import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { Kafka, Producer, Consumer, logLevel } from 'kafkajs';

@Injectable()
export class KafkaService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(KafkaService.name);
  public kafka: Kafka;
  private producer: Producer;
  private consumers: Map<string, Consumer> = new Map();
  private isProducerConnected = false;

  constructor() {
    this.kafka = new Kafka({
      clientId: 'wavegames-backend',
      brokers: [`${process.env.KAFKA_BROKER || 'localhost'}:${process.env.KAFKA_PORT || '9092'}`],
      logLevel: logLevel.INFO,
      
      connectionTimeout: 10000,
      requestTimeout: 30000,
      
      retry: {
        initialRetryTime: 300,
        retries: 10,
        maxRetryTime: 30000,
        multiplier: 2,
        factor: 0.2,
      },
    });

    this.producer = this.kafka.producer({
      allowAutoTopicCreation: false,
      transactionTimeout: 60000,
      maxInFlightRequests: 5,
      idempotent: true,
      
      retry: {
        initialRetryTime: 300,
        retries: 10,
        maxRetryTime: 30000,
      },
    });
  }

  async onModuleInit() {
    try {
      await this.connectProducer();
      this.logger.log('Kafka Producer connected successfully');
    } catch (error) {
      this.logger.error('Failed to connect Kafka Producer', error.stack);
      this.scheduleProducerReconnect();
    }
  }

  async onModuleDestroy() {
    try {
      for (const [groupId, consumer] of this.consumers.entries()) {
        await consumer.disconnect();
        this.logger.log(`Consumer ${groupId} disconnected`);
      }
      
      if (this.isProducerConnected) {
        await this.producer.disconnect();
        this.logger.log('Kafka Producer disconnected');
      }
    } catch (error) {
      this.logger.error('Error during Kafka shutdown', error.stack);
    }
  }

  private async connectProducer() {
    await this.producer.connect();
    this.isProducerConnected = true;

    this.producer.on('producer.connect', () => {
      this.logger.log('Producer connected');
      this.isProducerConnected = true;
    });

    this.producer.on('producer.disconnect', () => {
      this.logger.warn('Producer disconnected');
      this.isProducerConnected = false;
      this.scheduleProducerReconnect();
    });

    this.producer.on('producer.network.request_timeout', (payload) => {
      this.logger.warn('Producer request timeout', payload);
    });
  }

  private scheduleProducerReconnect() {
    setTimeout(async () => {
      if (!this.isProducerConnected) {
        this.logger.log('Attempting to reconnect producer...');
        try {
          await this.connectProducer();
          this.logger.log('Producer reconnected successfully');
        } catch (error) {
          this.logger.error('Failed to reconnect producer', error.stack);
          this.scheduleProducerReconnect();
        }
      }
    }, 5000);
  }

  async produce(game: string, message: any): Promise<void> {
    const topic = `game.${game}.bets`;
    
    try {
      if (!this.isProducerConnected) {
        throw new Error('Producer is not connected');
      }

      await this.producer.send({
        topic,
        messages: [
          {
            key: message.userId || null,
            value: JSON.stringify(message),
            timestamp: Date.now().toString(),
          },
        ],
        acks: -1,
        timeout: 30000,
      });

      this.logger.debug(`Message produced to ${topic}`);
    } catch (error) {
      this.logger.error(`Failed to produce message to ${topic}`, error.stack);
      throw error;
    }
  }

  async createConsumer(
    groupId: string,
    topics: string[],
    onMessage: (msg: any) => Promise<void>,
    fromBeginning: boolean = false,
  ): Promise<Consumer> {
    // Check if consumer already exists
    if (this.consumers.has(groupId)) {
      this.logger.warn(`Consumer ${groupId} already exists`);
      let consumers= this.consumers.get(groupId);
      if(consumers){
        return consumers;
      }else{
        console.log(" No consumer")
      }
    }

    const consumer = this.kafka.consumer({
      groupId,
      sessionTimeout: 30000,
      heartbeatInterval: 3000,
      maxBytesPerPartition: 1048576,
      maxWaitTimeInMs: 100,
      
      retry: {
        initialRetryTime: 300,
        retries: 10,
        maxRetryTime: 30000,
      },
    });

    try {
      await consumer.connect();
      this.logger.log(`Consumer ${groupId} connected`);

      for (const topic of topics) {
        await consumer.subscribe({
          topic,
          fromBeginning,
        });
        this.logger.log(`Consumer ${groupId} subscribed to ${topic}`);
      }

      await consumer.run({
        partitionsConsumedConcurrently: 3,
        
        eachMessage: async ({ topic, partition, message }) => {
          try {
            if (message.value) {
               const parsedMessage = JSON.parse(message.value.toString());
              await onMessage(parsedMessage);
              this.logger.debug(`Message processed from ${topic} partition ${partition}`);
            }
          } catch (error) {
            this.logger.error(
              `Error processing message from ${topic} partition ${partition}`,
              error.stack,
            );
          }
        },
      });

      consumer.on('consumer.connect', () => {
        this.logger.log(`Consumer ${groupId} connected`);
      });

      consumer.on('consumer.disconnect', () => {
        this.logger.warn(`Consumer ${groupId} disconnected`);
      });

      consumer.on('consumer.crash', (error) => {
        this.logger.error(`Consumer ${groupId} crashed`, error);
      });

      this.consumers.set(groupId, consumer);

      return consumer;
    } catch (error) {
      this.logger.error(`Failed to create consumer ${groupId}`, error.stack);
      throw error;
    }
  }

  async disconnectConsumer(groupId: string): Promise<boolean> {
    const consumer = this.consumers.get(groupId);
    if (consumer) {
      try {
        await consumer.disconnect();
        this.consumers.delete(groupId);
        this.logger.log(`Consumer ${groupId} disconnected and removed`);
        return true;
      } catch (error) {
        this.logger.error(`Failed to disconnect consumer ${groupId}`, error.stack);
        throw error;
      }
    }
    return false;
  }

  getActiveConsumers(): string[] {
    return Array.from(this.consumers.keys());
  }

  isConsumerActive(groupId: string): boolean {
    return this.consumers.has(groupId);
  }

  async isHealthy(): Promise<boolean> {
    return this.isProducerConnected;
  }

  getProducerStatus(): boolean {
    return this.isProducerConnected;
  }
}