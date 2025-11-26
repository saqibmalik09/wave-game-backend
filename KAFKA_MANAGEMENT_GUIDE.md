# Kafka Dynamic Management Guide

Complete guide for managing Kafka topics, partitions, and consumers through API and Docker CLI.

---

## 🚀 Setup

### 1. Environment Variables (.env)
```env
KAFKA_BROKER=localhost
KAFKA_PORT=9092
```

### 2. Start Docker Services
```bash
# Start all services
docker-compose up -d

# Check if Kafka is healthy
docker ps

# Wait for Kafka to be healthy (look for "healthy" status)
```

---

## 📋 API Endpoints Overview

| Method | Endpoint | Description |
|--------|----------|-------------|
| **Topics** |
| POST | `/kafka/topics` | Create a new topic |
| GET | `/kafka/topics` | List all topics |
| GET | `/kafka/topics/metadata` | Get all topics with metadata |
| GET | `/kafka/topics/:topic` | Get specific topic metadata |
| DELETE | `/kafka/topics/:topic` | Delete a topic |
| **Partitions** |
| POST | `/kafka/partitions` | Increase partitions for a topic |
| POST | `/kafka/topics/:topic/config` | Alter topic configuration |
| **Consumers** |
| POST | `/kafka/consumers` | Create and start a consumer |
| GET | `/kafka/consumers` | List all consumer groups |
| GET | `/kafka/consumers/:groupId` | Describe consumer group |
| DELETE | `/kafka/consumers/:groupId` | Disconnect consumer |
| DELETE | `/kafka/consumers/:groupId/group` | Delete consumer group |
| GET | `/kafka/consumers/active/list` | List active consumers in app |
| **System** |
| GET | `/kafka/brokers` | Get broker information |
| GET | `/kafka/health` | Check Kafka health |
| GET | `/kafka/docker/commands` | Get Docker CLI commands |

---

## 🎯 Step-by-Step Usage

### Step 1: Create a Topic

#### Via API:
```bash
curl -X POST http://localhost:3000/kafka/topics \
  -H "Content-Type: application/json" \
  -d '{
    "topic": "game.roulette.bets",
    "numPartitions": 3,
    "replicationFactor": 1,
    "configs": {
      "compression.type": "gzip",
      "retention.ms": "604800000"
    }
  }'
```

**Response:**
```json
{
  "success": true,
  "message": "Topic game.roulette.bets created successfully with 3 partitions"
}
```

#### Via Docker CLI:
```bash
# 1. Access Kafka container
docker exec -it kafka bash

# 2. Create topic
/usr/bin/kafka-topics --create \
  --topic game.roulette.bets \
  --partitions 3 \
  --replication-factor 1 \
  --bootstrap-server localhost:9092
```

---

### Step 2: List All Topics

#### Via API:
```bash
curl http://localhost:3000/kafka/topics
```

**Response:**
```json
{
  "success": true,
  "count": 2,
  "topics": [
    "game.teenpatti.bets",
    "game.roulette.bets"
  ]
}
```

#### Via Docker CLI:
```bash
docker exec -it kafka bash
/usr/bin/kafka-topics --list --bootstrap-server localhost:9092
```

---

### Step 3: Get Topic Metadata (View Partitions)

#### Via API:
```bash
curl http://localhost:3000/kafka/topics/game.roulette.bets
```

**Response:**
```json
{
  "success": true,
  "data": {
    "topic": "game.roulette.bets",
    "partitions": [
      {
        "partitionId": 0,
        "leader": 1,
        "replicas": [1],
        "isr": [1]
      },
      {
        "partitionId": 1,
        "leader": 1,
        "replicas": [1],
        "isr": [1]
      },
      {
        "partitionId": 2,
        "leader": 1,
        "replicas": [1],
        "isr": [1]
      }
    ],
    "partitionCount": 3
  }
}
```

#### Via Docker CLI:
```bash
docker exec -it kafka bash
/usr/bin/kafka-topics --describe \
  --topic game.roulette.bets \
  --bootstrap-server localhost:9092
```

---

### Step 4: Increase Partitions

⚠️ **Note:** You can only INCREASE partitions, not decrease them!

#### Via API:
```bash
curl -X POST http://localhost:3000/kafka/partitions \
  -H "Content-Type: application/json" \
  -d '{
    "topic": "game.roulette.bets",
    "totalPartitions": 6
  }'
```

**Response:**
```json
{
  "success": true,
  "message": "Topic game.roulette.bets now has 6 partitions"
}
```

#### Via Docker CLI:
```bash
docker exec -it kafka bash
/usr/bin/kafka-topics --alter \
  --topic game.roulette.bets \
  --partitions 6 \
  --bootstrap-server localhost:9092
```

---

### Step 5: Create a Consumer

#### Via API:
```bash
curl -X POST http://localhost:3000/kafka/consumers \
  -H "Content-Type: application/json" \
  -d '{
    "groupId": "roulette-engine",
    "topics": ["game.roulette.bets"],
    "fromBeginning": false
  }'
```

**Response:**
```json
{
  "success": true,
  "message": "Consumer roulette-engine created and started successfully",
  "groupId": "roulette-engine",
  "topics": ["game.roulette.bets"],
  "fromBeginning": false
}
```

---

### Step 6: List Consumer Groups

#### Via API:
```bash
curl http://localhost:3000/kafka/consumers
```

**Response:**
```json
{
  "success": true,
  "kafka": {
    "groups": [
      {
        "groupId": "teenpatti-engine",
        "protocolType": "consumer"
      },
      {
        "groupId": "roulette-engine",
        "protocolType": "consumer"
      }
    ]
  },
  "activeInApp": ["teenpatti-engine", "roulette-engine"]
}
```

#### Via Docker CLI:
```bash
docker exec -it kafka bash
/usr/bin/kafka-consumer-groups --list --bootstrap-server localhost:9092
```

---

### Step 7: Describe Consumer Group

#### Via API:
```bash
curl http://localhost:3000/kafka/consumers/roulette-engine
```

**Response:**
```json
{
  "success": true,
  "data": {
    "groupId": "roulette-engine",
    "state": "Stable",
    "protocolType": "consumer",
    "protocol": "RoundRobinAssigner",
    "members": [
      {
        "memberId": "wavegames-backend-xxx",
        "clientId": "wavegames-backend",
        "clientHost": "/172.18.0.1"
      }
    ],
    "activeInApp": true
  }
}
```

#### Via Docker CLI:
```bash
docker exec -it kafka bash
/usr/bin/kafka-consumer-groups \
  --describe \
  --group roulette-engine \
  --bootstrap-server localhost:9092
```

---

### Step 8: Get All Topics with Metadata

#### Via API:
```bash
curl http://localhost:3000/kafka/topics/metadata
```

**Response:**
```json
{
  "success": true,
  "count": 2,
  "topics": [
    {
      "topic": "game.teenpatti.bets",
      "partitions": [...],
      "partitionCount": 12
    },
    {
      "topic": "game.roulette.bets",
      "partitions": [...],
      "partitionCount": 6
    }
  ]
}
```

---

### Step 9: Check Kafka Health

#### Via API:
```bash
curl http://localhost:3000/kafka/health
```

**Response:**
```json
{
  "success": true,
  "healthy": true,
  "producer": {
    "connected": true
  },
  "consumers": {
    "active": 2,
    "list": ["teenpatti-engine", "roulette-engine"]
  }
}
```

---

### Step 10: Get Broker Information

#### Via API:
```bash
curl http://localhost:3000/kafka/brokers
```

**Response:**
```json
{
  "success": true,
  "data": {
    "clusterId": "MkU3OEVBNTcwNTJENDM2Qk",
    "controller": 1,
    "brokers": [
      {
        "nodeId": 1,
        "host": "kafka",
        "port": 29092
      }
    ]
  }
}
```

---

## 🔧 Advanced Operations

### Delete a Topic
```bash
# Via API
curl -X DELETE http://localhost:3000/kafka/topics/game.roulette.bets

# Via Docker
docker exec -it kafka bash
/usr/bin/kafka-topics --delete \
  --topic game.roulette.bets \
  --bootstrap-server localhost:9092
```

### Disconnect a Consumer
```bash
# Via API
curl -X DELETE http://localhost:3000/kafka/consumers/roulette-engine
```

### Delete Consumer Group
```bash
# Via API
curl -X DELETE http://localhost:3000/kafka/consumers/roulette-engine/group

# Via Docker
docker exec -it kafka bash
/usr/bin/kafka-consumer-groups --delete \
  --group roulette-engine \
  --bootstrap-server localhost:9092
```

### Alter Topic Configuration
```bash
curl -X POST http://localhost:3000/kafka/topics/game.roulette.bets/config \
  -H "Content-Type: application/json" \
  -d '{
    "topic": "game.roulette.bets",
    "configs": {
      "retention.ms": "1209600000",
      "compression.type": "snappy"
    }
  }'
```

---

## 📊 Monitoring with Kafka UI

Access Kafka UI at: **http://localhost:8082**

Features:
- Visual topic management
- Partition distribution view
- Consumer group monitoring
- Message browsing
- Configuration management

---

## 🎮 Game Integration Example

### Teen Patti Service (Updated)
```typescript
import { Injectable } from '@nestjs/common';
import { KafkaService } from 'src/kafka/kafka.service';

@Injectable()
export class TeenpattiService {
  constructor(private readonly kafka: KafkaService) {}

  async placeBet(bet: { userId: string; amount: number; tableId: string }) {
    // Publish to Kafka
    await this.kafka.produce('teenpatti', bet);
    
    return { status: 'accepted', bet };
  }
}
```

### Teen Patti Consumer (Updated)
```typescript
import { Injectable, OnModuleInit } from '@nestjs/common';
import { KafkaService } from 'src/kafka/kafka.service';

@Injectable()
export class TeenpattiConsumer implements OnModuleInit {
  constructor(private readonly kafka: KafkaService) {}

  async onModuleInit() {
    await this.kafka.createConsumer(
      'teenpatti-engine',
      ['game.teenpatti.bets'],
      async (bet) => {
        console.log('Processing Teen Patti bet:', bet);
        // Process game logic here
      },
      false, // fromBeginning
    );
  }
}
```

---

## 🚦 Common Docker Commands

### Access Kafka Container
```bash
docker exec -it kafka bash
```

### Check Container Logs
```bash
docker logs kafka
docker logs kafka -f  # Follow logs
```

### Restart Kafka
```bash
docker-compose restart kafka
```

### Stop All Services
```bash
docker-compose down
```

### Stop and Remove Volumes (Clean Slate)
```bash
docker-compose down -v
```

---

## 📝 Best Practices

1. **Topic Naming Convention**: Use `game.<game-name>.<event-type>` format
2. **Partition Planning**: Start with 1 partition, scale up based on load
3. **Consumer Groups**: Use descriptive names like `<game>-engine`
4. **Monitoring**: Regularly check health endpoint and Kafka UI
5. **Configuration**: Use compression for better performance
6. **Retention**: Set appropriate retention based on your needs (default: 7 days)

---

## 🐛 Troubleshooting

### Issue: Topic Already Exists
```bash
# Delete the topic first
curl -X DELETE http://localhost:3000/kafka/topics/game.roulette.bets
```

### Issue: Consumer Not Processing Messages
```bash
# Check consumer status
curl http://localhost:3000/kafka/consumers/roulette-engine

# Check if consumer is active
curl http://localhost:3000/kafka/consumers/active/list
```

### Issue: Kafka Not Healthy
```bash
# Check health
curl http://localhost:3000/kafka/health

# Check Docker logs
docker logs kafka

# Restart Kafka
docker-compose restart kafka
```

---

## 📚 API Testing Collection

Import this into Postman/Insomnia:

```json
{
  "name": "Kafka Management",
  "requests": [
    {
      "name": "Create Topic",
      "method": "POST",
      "url": "http://localhost:3000/kafka/topics",
      "body": {
        "topic": "game.roulette.bets",
        "numPartitions": 3,
        "replicationFactor": 1
      }
    },
    {
      "name": "List Topics",
      "method": "GET",
      "url": "http://localhost:3000/kafka/topics"
    },
    {
      "name": "Create Consumer",
      "method": "POST",
      "url": "http://localhost:3000/kafka/consumers",
      "body": {
        "groupId": "roulette-engine",
        "topics": ["game.roulette.bets"],
        "fromBeginning": false
      }
    }
  ]
}
```

---

## 🎯 Next Steps

1. ✅ Update docker-compose.yml with new settings
2. ✅ Add DTOs to your project
3. ✅ Implement KafkaAdminService
4. ✅ Update KafkaService
5. ✅ Create KafkaController
6. ✅ Update KafkaModule
7. ✅ Test all endpoints
8. ✅ Monitor via Kafka UI

Happy Kafka Management! 🚀