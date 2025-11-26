import { Controller, Get, Post, Delete, Body, Param, HttpStatus, HttpCode, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { KafkaAdminService } from './kafka-admin.service';
import { KafkaService } from './kafka.service';
import {
  CreateTopicDto,
  UpdatePartitionsDto,
  CreateConsumerDto,
  DeleteTopicDto,
  AlterTopicConfigDto,
} from './dto/kafka.dto';

@ApiTags('Kafka Management')
@Controller('kafka')
export class KafkaController {
  constructor(
    private readonly kafkaAdmin: KafkaAdminService,
    private readonly kafkaService: KafkaService,
  ) {}

  // ==================== TOPIC MANAGEMENT ====================

  @Post('topics')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new Kafka topic with custom partitions' })
  @ApiResponse({ status: 201, description: 'Topic created successfully' })
  @ApiResponse({ status: 400, description: 'Topic already exists or invalid parameters' })
  async createTopic(@Body() createTopicDto: CreateTopicDto) {
    const { topic, numPartitions = 1, replicationFactor = 1, configs } = createTopicDto;
    
    const configEntries = configs
      ? Object.entries(configs).map(([name, value]) => ({ name, value }))
      : undefined;

    return await this.kafkaAdmin.createTopic(
      topic,
      numPartitions,
      replicationFactor,
      configEntries,
    );
  }

  @Get('topics')
  @ApiOperation({ summary: 'List all Kafka topics' })
  @ApiResponse({ status: 200, description: 'List of topics returned' })
  async listTopics() {
    const topics = await this.kafkaAdmin.listTopics();
    return {
      success: true,
      count: topics.length,
      topics: topics.filter(t => !t.startsWith('__')), // Filter internal topics
    };
  }

  @Get('topics/metadata')
  @ApiOperation({ summary: 'Get metadata for all topics including partitions' })
  @ApiResponse({ status: 200, description: 'Topics metadata returned' })
  async getAllTopicsMetadata() {
    const metadata = await this.kafkaAdmin.getAllTopicsMetadata();
    return {
      success: true,
      count: metadata.length,
      topics: metadata,
    };
  }

  @Get('topics/:topic')
  @ApiOperation({ summary: 'Get metadata for a specific topic' })
  @ApiResponse({ status: 200, description: 'Topic metadata returned' })
  @ApiResponse({ status: 404, description: 'Topic not found' })
  async getTopicMetadata(@Param('topic') topic: string) {
    const metadata = await this.kafkaAdmin.getTopicMetadata(topic);
    return {
      success: true,
      data: metadata,
    };
  }

  @Delete('topics/:topic')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete a Kafka topic' })
  @ApiResponse({ status: 200, description: 'Topic deleted successfully' })
  @ApiResponse({ status: 400, description: 'Failed to delete topic' })
  async deleteTopic(@Param('topic') topic: string) {
    return await this.kafkaAdmin.deleteTopic(topic);
  }
 /**
 * Describe a topic just like CLI: 
 * /usr/bin/kafka-topics --describe --topic <topic> --bootstrap-server localhost:9092
 */
@Get('topics/:topic/describe')
@HttpCode(HttpStatus.OK)
@ApiOperation({ summary: 'Describe a Kafka topic (like CLI command)' })
@ApiResponse({ status: 200, description: 'Topic description returned' })
@ApiResponse({ status: 404, description: 'Topic not found' })
async describeTopicCLI(@Param('topic') topic: string) {
  try {
    const metadata = await this.kafkaAdmin.getTopicMetadata(topic);

    if (!metadata) {
      return {
        success: false,
        message: ` Topic "${topic}" does not exist.`,
      };
    }

    const partitions = metadata.partitions.map((p: any) => ({
      partition: p.partitionId,
      leader: p.leader,
      replicas: p.replicas,
      inSyncReplicas: p.isr,
    }));

    return {
      success: true,
      topic: metadata.topic,
      partitionCount: metadata.partitionCount,
      partitions,
      message: `✅ Topic "${topic}" is active with ${metadata.partitionCount} partitions.`,
    };
  } catch (error) {
    if (error.message.includes('not found')) {
      return {
        success: false,
        message: `❌ Topic "${topic}" not found. You may need to create it first.`,
      };
    }

    return {
      success: false,
      message: `Failed to describe topic "${topic}": ${error.message}`,
    };
  }
}
   
  // ==================== PARTITION MANAGEMENT ====================

  @Post('partitions')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Increase partitions for a topic (cannot decrease)' })
  @ApiResponse({ status: 200, description: 'Partitions increased successfully' })
  @ApiResponse({ status: 400, description: 'Invalid parameters' })
  async updatePartitions(@Body() updatePartitionsDto: UpdatePartitionsDto) {
    const { topic, totalPartitions } = updatePartitionsDto;
    return await this.kafkaAdmin.createPartitions(topic, totalPartitions);
  }

  /**
 * Kafka does NOT allow decreasing partitions once created.
 * This endpoint exists to clearly inform users of that limitation.
 */

  @Post('partitions/decrease')
    @HttpCode(HttpStatus.BAD_REQUEST)
    @ApiOperation({ summary: 'Attempt to decrease partitions (Kafka does not support this)' })
    @ApiResponse({ status: 400, description: 'Cannot decrease partitions after creation' })
    async decreasePartitions(@Body() updatePartitionsDto: UpdatePartitionsDto) {
    const { topic, totalPartitions } = updatePartitionsDto;
    return {
        success: false,
        message: ` Cannot decrease partitions for topic "${topic}" to ${totalPartitions}. Kafka does not allow reducing partitions once created.`,
    };
}

@Get('consumers/:groupId/partitions')
@HttpCode(HttpStatus.OK)
@ApiOperation({ summary: 'Show which topic partitions are being consumed by a consumer group' })
@ApiResponse({ status: 200, description: 'Partitions being consumed returned' })
@ApiResponse({ status: 404, description: 'Consumer group not found' })
async getConsumerPartitions(@Param('groupId') groupId: string) {
  try {
    const description = await this.kafkaAdmin.describeConsumerGroup(groupId);

    const partitions = description?.members?.map((member: any) => ({
      memberId: member.memberId,
      clientId: member.clientId,
      topics: member.assignments?.map((a: any) => ({
        topic: a.topic,
        partitions: a.partitions,
      })),
    }));

    return {
      success: true,
      groupId,
      partitions: partitions || [],
      message:
        partitions?.length > 0
          ? `✅ Consumer group "${groupId}" is consuming from the above partitions.`
          : `⚠️ Consumer group "${groupId}" is currently not consuming any partitions.`,
    };
  } catch (error) {
    return {
      success: false,
      message: `Failed to fetch partition consumption for group "${groupId}": ${error.message}`,
    };
  }
}

  @Post('topics/:topic/config')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Alter topic configuration' })
  @ApiResponse({ status: 200, description: 'Configuration updated successfully' })
  @ApiResponse({ status: 400, description: 'Failed to update configuration' })
  async alterTopicConfig(@Body() alterTopicConfigDto: AlterTopicConfigDto) {
    const { topic, configs } = alterTopicConfigDto;
    return await this.kafkaAdmin.alterTopicConfig(topic, configs);
  }

  // ==================== CONSUMER GROUP MANAGEMENT ====================

  @Post('consumers')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create and start a new consumer for topics' })
  @ApiResponse({ status: 201, description: 'Consumer created and started successfully' })
  @ApiResponse({ status: 400, description: 'Consumer already exists or invalid parameters' })
  async createConsumer(@Body() createConsumerDto: CreateConsumerDto) {
    const { groupId, topics, fromBeginning = false } = createConsumerDto;

    // Check if consumer already exists
    if (this.kafkaService.isConsumerActive(groupId)) {
      return {
        success: false,
        message: `Consumer group ${groupId} is already active`,
      };
    }

    // Create consumer with a basic message handler
    await this.kafkaService.createConsumer(
      groupId,
      topics,
      async (message) => {
        // Default handler - logs the message
        console.log(`[${groupId}] Received message:`, message);
      },
      fromBeginning,
    );

    return {
      success: true,
      message: `Consumer ${groupId} created and started successfully`,
      groupId,
      topics,
      fromBeginning,
    };
  }

  @Get('consumers')
  @ApiOperation({ summary: 'List all consumer groups' })
  @ApiResponse({ status: 200, description: 'List of consumer groups returned' })
  async listConsumerGroups() {
    const groups = await this.kafkaAdmin.listConsumerGroups();
    const activeConsumers = this.kafkaService.getActiveConsumers();
    
    return {
      success: true,
      kafka: groups,
      activeInApp: activeConsumers,
    };
  }

  @Get('consumers/:groupId')
  @ApiOperation({ summary: 'Describe a consumer group' })
  @ApiResponse({ status: 200, description: 'Consumer group details returned' })
  @ApiResponse({ status: 404, description: 'Consumer group not found' })
  async describeConsumerGroup(@Param('groupId') groupId: string) {
    const description = await this.kafkaAdmin.describeConsumerGroup(groupId);
    const isActive = this.kafkaService.isConsumerActive(groupId);
    
    return {
      success: true,
      data: {
        ...description,
        activeInApp: isActive,
      },
    };
  }

  @Delete('consumers/:groupId')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Stop and disconnect a consumer' })
  @ApiResponse({ status: 200, description: 'Consumer disconnected successfully' })
  @ApiResponse({ status: 404, description: 'Consumer not found' })
  async disconnectConsumer(@Param('groupId') groupId: string) {
    const disconnected = await this.kafkaService.disconnectConsumer(groupId);
    
    if (disconnected) {
      return {
        success: true,
        message: `Consumer ${groupId} disconnected successfully`,
      };
    }
    
    return {
      success: false,
      message: `Consumer ${groupId} not found or already disconnected`,
    };
  }

  @Delete('consumers/:groupId/group')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete a consumer group from Kafka' })
  @ApiResponse({ status: 200, description: 'Consumer group deleted successfully' })
  @ApiResponse({ status: 400, description: 'Failed to delete consumer group' })
  async deleteConsumerGroup(@Param('groupId') groupId: string) {
    // First disconnect if active in app
    if (this.kafkaService.isConsumerActive(groupId)) {
      await this.kafkaService.disconnectConsumer(groupId);
    }
    
    // Then delete from Kafka
    return await this.kafkaAdmin.deleteConsumerGroup(groupId);
  }

  @Get('consumers/active/list')
  @ApiOperation({ summary: 'List active consumers in the application' })
  @ApiResponse({ status: 200, description: 'List of active consumers returned' })
  async listActiveConsumers() {
    const activeConsumers = this.kafkaService.getActiveConsumers();
    
    return {
      success: true,
      count: activeConsumers.length,
      consumers: activeConsumers,
    };
  }

  // ==================== BROKER MANAGEMENT ====================

  @Get('brokers')
  @ApiOperation({ summary: 'Get Kafka broker information' })
  @ApiResponse({ status: 200, description: 'Broker information returned' })
  async getBrokers() {
    const brokers = await this.kafkaAdmin.getBrokers();
    return {
      success: true,
      data: brokers,
    };
  }

  // ==================== HEALTH & STATUS ====================

  @Get('health')
  @ApiOperation({ summary: 'Check Kafka connection health' })
  @ApiResponse({ status: 200, description: 'Health status returned' })
  async getHealth() {
    const isHealthy = await this.kafkaService.isHealthy();
    const producerStatus = this.kafkaService.getProducerStatus();
    const activeConsumers = this.kafkaService.getActiveConsumers();

    return {
      success: true,
      healthy: isHealthy,
      producer: {
        connected: producerStatus,
      },
      consumers: {
        active: activeConsumers.length,
        list: activeConsumers,
      },
    };
  }

  // ==================== DOCKER COMMANDS INFO ====================

  @Get('docker/commands')
  @ApiOperation({ summary: 'Get Docker CLI commands for Kafka management' })
  @ApiResponse({ status: 200, description: 'Docker commands returned' })
  async getDockerCommands() {
    return {
      success: true,
      commands: {
        access_container: {
          description: 'Access Kafka container bash',
          command: 'docker exec -it kafka bash',
        },
        list_topics: {
          description: 'List all topics',
          command: '/usr/bin/kafka-topics --list --bootstrap-server localhost:9092',
        },
        describe_topic: {
          description: 'Describe a specific topic',
          command: '/usr/bin/kafka-topics --describe --topic <topic-name> --bootstrap-server localhost:9092',
          example: '/usr/bin/kafka-topics --describe --topic game.teenpatti.bets --bootstrap-server localhost:9092',
        },
        create_topic: {
          description: 'Create a new topic',
          command: '/usr/bin/kafka-topics --create --topic <topic-name> --partitions <num> --replication-factor <num> --bootstrap-server localhost:9092',
          example: '/usr/bin/kafka-topics --create --topic game.roulette.bets --partitions 3 --replication-factor 1 --bootstrap-server localhost:9092',
        },
        delete_topic: {
          description: 'Delete a topic',
          command: '/usr/bin/kafka-topics --delete --topic <topic-name> --bootstrap-server localhost:9092',
        },
        alter_partitions: {
          description: 'Increase partitions (cannot decrease)',
          command: '/usr/bin/kafka-topics --alter --topic <topic-name> --partitions <new-total> --bootstrap-server localhost:9092',
        },
        list_consumer_groups: {
          description: 'List all consumer groups',
          command: '/usr/bin/kafka-consumer-groups --bootstrap-server localhost:9092 --list',
        },
        describe_consumer_group: {
          description: 'Describe a consumer group',
          command: '/usr/bin/kafka-consumer-groups --bootstrap-server localhost:9092 --describe --group <group-id>',
          example: '/usr/bin/kafka-consumer-groups --bootstrap-server localhost:9092 --describe --group teenpatti-engine',
        },
        delete_consumer_group: {
          description: 'Delete a consumer group',
          command: '/usr/bin/kafka-consumer-groups --bootstrap-server localhost:9092 --delete --group <group-id>',
        },
        consume_messages: {
          description: 'Consume messages from a topic',
          command: '/usr/bin/kafka-console-consumer --bootstrap-server localhost:9092 --topic <topic-name> --from-beginning',
        },
        produce_message: {
          description: 'Produce a message to a topic',
          command: '/usr/bin/kafka-console-producer --bootstrap-server localhost:9092 --topic <topic-name>',
        },
      },
    };
  }
}