import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { Admin, Kafka, ITopicConfig } from 'kafkajs';

@Injectable()
export class KafkaAdminService {
  private readonly logger = new Logger(KafkaAdminService.name);
  private admin: Admin;

  constructor(private kafka: Kafka) {
    this.admin = this.kafka.admin();
  }

  async onModuleInit() {
    try {
      await this.admin.connect();
      this.logger.log('Kafka Admin connected successfully');
    } catch (error) {
      this.logger.error('Failed to connect Kafka Admin', error.stack);
    }
  }

  async onModuleDestroy() {
    try {
      await this.admin.disconnect();
      this.logger.log('Kafka Admin disconnected');
    } catch (error) {
      this.logger.error('Error disconnecting Kafka Admin', error.stack);
    }
  }

  /**
   * Create a new topic with custom partitions and replication
   */
 /**
   * Create a new topic with custom partitions and replication
   */
  async createTopic(
    topic: string,
    numPartitions = 1,
    replicationFactor = 1,
    configEntries?: { name: string; value: string }[],
  ): Promise<{ success: boolean; message: string }> {
    try {
      const created = await this.admin.createTopics({
        waitForLeaders: true,
        topics: [
          {
            topic,
            numPartitions,
            replicationFactor,
            configEntries: configEntries ?? [
              { name: 'compression.type', value: 'gzip' },
              { name: 'min.insync.replicas', value: '1' },
              { name: 'segment.bytes', value: '1073741824' },
              { name: 'max.message.bytes', value: '10485760' },
            ],
          },
        ],
      });

      if (created) {
        this.logger.log(`✅ Topic ${topic} created with ${numPartitions} partitions`);
        return {
          success: true,
          message: `Topic ${topic} created successfully with ${numPartitions} partitions`,
        };
      }

      return { success: false, message: `Topic ${topic} already exists` };
    } catch (error) {
      this.logger.error(`❌ Failed to create topic ${topic}`, error.stack);
      throw new BadRequestException(`Failed to create topic: ${error.message}`);
    }
  }

  /**
   * List all topics
   */
  async listTopics(): Promise<string[]> {
    try {
      const topics = await this.admin.listTopics();
      return topics;
    } catch (error) {
      this.logger.error('Failed to list topics', error.stack);
      throw new BadRequestException(`Failed to list topics: ${error.message}`);
    }
  }

  /**
   * Get topic metadata including partitions
   */
  async getTopicMetadata(topic: string): Promise<any> {
    try {
      const metadata = await this.admin.fetchTopicMetadata({ topics: [topic] });
      
      if (metadata.topics.length === 0) {
        throw new BadRequestException(`Topic ${topic} not found`);
      }

      const topicMetadata = metadata.topics[0];
      
      return {
        topic: topicMetadata.name,
        partitions: topicMetadata.partitions.map((p) => ({
          partitionId: p.partitionId,
          leader: p.leader,
          replicas: p.replicas,
          isr: p.isr,
        })),
        partitionCount: topicMetadata.partitions.length,
      };
    } catch (error) {
      this.logger.error(`Failed to get metadata for topic ${topic}`, error.stack);
      throw new BadRequestException(`Failed to get topic metadata: ${error.message}`);
    }
  }

  /**
   * Get all topics with their metadata
   */
  async getAllTopicsMetadata(): Promise<any[]> {
    try {
      const topics = await this.listTopics();
      const metadataPromises = topics
        .filter(t => !t.startsWith('__')) // Filter internal topics
        .map(topic => this.getTopicMetadata(topic));
      
      return await Promise.all(metadataPromises);
    } catch (error) {
      this.logger.error('Failed to get all topics metadata', error.stack);
      throw new BadRequestException(`Failed to get topics metadata: ${error.message}`);
    }
  }

  /**
   * Increase partitions for a topic (cannot decrease)
   */
  async createPartitions(topic: string, totalPartitions: number): Promise<any> {
    try {
      await this.admin.createPartitions({
        topicPartitions: [
          {
            topic,
            count: totalPartitions,
          },
        ],
      });

      this.logger.log(`Partitions increased for topic ${topic} to ${totalPartitions}`);
      return {
        success: true,
        message: `Topic ${topic} now has ${totalPartitions} partitions`,
      };
    } catch (error) {
      this.logger.error(`Failed to create partitions for topic ${topic}`, error.stack);
      throw new BadRequestException(`Failed to create partitions: ${error.message}`);
    }
  }

  /**
   * Delete a topic
   */
  async deleteTopic(topic: string): Promise<{ success: boolean; message: string }> {
    try {
      await this.admin.deleteTopics({
        topics: [topic],
        timeout: 5000,
      });

      this.logger.log(`Topic ${topic} deleted`);
      return {
        success: true,
        message: `Topic ${topic} deleted successfully`,
      };
    } catch (error) {
      this.logger.error(`Failed to delete topic ${topic}`, error.stack);
      throw new BadRequestException(`Failed to delete topic: ${error.message}`);
    }
  }

  /**
   * List all consumer groups
   */
  async listConsumerGroups(): Promise<any> {
    try {
      const groups = await this.admin.listGroups();
      return {
        groups: groups.groups.map((g) => ({
          groupId: g.groupId,
          protocolType: g.protocolType,
        })),
      };
    } catch (error) {
      this.logger.error('Failed to list consumer groups', error.stack);
      throw new BadRequestException(`Failed to list consumer groups: ${error.message}`);
    }
  }

  /**
   * Describe a consumer group
   */
  async describeConsumerGroup(groupId: string): Promise<any> {
    try {
      const description = await this.admin.describeGroups([groupId]);
      
      if (description.groups.length === 0) {
        throw new BadRequestException(`Consumer group ${groupId} not found`);
      }

      const group = description.groups[0];
      
      return {
        groupId: group.groupId,
        state: group.state,
        protocolType: group.protocolType,
        protocol: group.protocol,
        members: group.members.map((m) => ({
          memberId: m.memberId,
          clientId: m.clientId,
          clientHost: m.clientHost,
        })),
      };
    } catch (error) {
      this.logger.error(`Failed to describe consumer group ${groupId}`, error.stack);
      throw new BadRequestException(`Failed to describe consumer group: ${error.message}`);
    }
  }

  /**
   * Delete a consumer group
   */
  async deleteConsumerGroup(groupId: string): Promise<{ success: boolean; message: string }> {
    try {
      await this.admin.deleteGroups([groupId]);
      
      this.logger.log(`Consumer group ${groupId} deleted`);
      return {
        success: true,
        message: `Consumer group ${groupId} deleted successfully`,
      };
    } catch (error) {
      this.logger.error(`Failed to delete consumer group ${groupId}`, error.stack);
      throw new BadRequestException(`Failed to delete consumer group: ${error.message}`);
    }
  }

  /**
   * Alter topic configuration
   */
  async alterTopicConfig(topic: string, configs: Record<string, string>): Promise<any> {
    try {
      const configEntries = Object.entries(configs).map(([name, value]) => ({
        name,
        value,
      }));

      await this.admin.alterConfigs({
        validateOnly: false,
        resources: [
          {
            type: 2, // TOPIC
            name: topic,
            configEntries,
          },
        ],
      });

      this.logger.log(`Configuration altered for topic ${topic}`);
      return {
        success: true,
        message: `Configuration updated for topic ${topic}`,
      };
    } catch (error) {
      this.logger.error(`Failed to alter config for topic ${topic}`, error.stack);
      throw new BadRequestException(`Failed to alter topic config: ${error.message}`);
    }
  }

  /**
   * Get broker information
   */
  async getBrokers(): Promise<any> {
    try {
      const cluster = await this.admin.describeCluster();
      
      return {
        clusterId: cluster.clusterId,
        controller: cluster.controller,
        brokers: cluster.brokers.map((b) => ({
          nodeId: b.nodeId,
          host: b.host,
          port: b.port,
        })),
      };
    } catch (error) {
      this.logger.error('Failed to get broker information', error.stack);
      throw new BadRequestException(`Failed to get brokers: ${error.message}`);
    }
  }
}