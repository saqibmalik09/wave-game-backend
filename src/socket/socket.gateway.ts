import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';
import { TeenpattiService } from 'src/games/teen-patti-game/teenpatti/teenpatti.service';

@WebSocketGateway({
  cors: {
    origin: '*', // Configure this properly in production
    credentials: true,
  },
  transports: ['websocket', 'polling'],
})
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(SocketGateway.name);
  private connectedClients = new Map<string, Socket>();
  private tableSubscriptions = new Map<string, Set<string>>(); // tableId -> Set of socketIds

  constructor(private readonly teenpattiService: TeenpattiService) {}

  handleConnection(client: Socket) {
    this.connectedClients.set(client.id, client);
    this.logger.log(`Client connected: ${client.id} | Total: ${this.connectedClients.size}`);
    
    client.emit('connected', {
      message: 'Connected to Wave Games',
      socketId: client.id,
      timestamp: Date.now(),
    });
  }

  handleDisconnect(client: Socket) {
    // Remove from all table subscriptions
    this.tableSubscriptions.forEach((sockets, tableId) => {
      if (sockets.has(client.id)) {
        sockets.delete(client.id);
        if (sockets.size === 0) {
          this.tableSubscriptions.delete(tableId);
        }
      }
    });

    this.connectedClients.delete(client.id);
    this.logger.log(`Client disconnected: ${client.id} | Total: ${this.connectedClients.size}`);
  }

  /**
   * Join a table (subscribe to table events)
   */
  @SubscribeMessage('joinTable')
handleJoinTable(
  @ConnectedSocket() client: Socket,
  @MessageBody() data: { tableId: string; userId: string },
) {
  const { tableId, userId } = data;

  // ✅ safer version
  let tableUsers = this.tableSubscriptions.get(tableId);
  if (!tableUsers) {
    tableUsers = new Set<string>();
    this.tableSubscriptions.set(tableId, tableUsers);
  }
  tableUsers.add(client.id);

  client.join(tableId);
  this.logger.log(`Client ${client.id} (User: ${userId}) joined table ${tableId}`);

  client.emit('joinedTable', {
    success: true,
    tableId,
    message: `Joined table ${tableId}`,
  });

  // Broadcast to others at the table
  client.to(tableId).emit('playerJoined', {
    userId,
    tableId,
    timestamp: Date.now(),
  });
}

  /**
   * Leave a table
   */
  @SubscribeMessage('leaveTable')
  handleLeaveTable(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { tableId: string; userId: string },
  ) {
    const { tableId, userId } = data;

    const tableUsers = this.tableSubscriptions.get(tableId);
    if (tableUsers) {
      tableUsers.delete(client.id);
      if (tableUsers.size === 0) {
        this.tableSubscriptions.delete(tableId);
      }
    }

    client.leave(tableId);
    this.logger.log(`Client ${client.id} (User: ${userId}) left table ${tableId}`);

    client.to(tableId).emit('playerLeft', {
      userId,
      tableId,
      timestamp: Date.now(),
    });
  }

  /**
   * Place a bet via WebSocket (HIGH PERFORMANCE)
   */
  @SubscribeMessage('placeBet')
  async handlePlaceBet(
    @ConnectedSocket() client: Socket,
    @MessageBody() betData: { userId: string; amount: number; tableId: string; betType?: string },
  ) {
    try {
      const startTime = Date.now();
      
      // Immediately acknowledge to client
      client.emit('betAcknowledged', {
        success: true,
        userId: betData.userId,
        tableId: betData.tableId,
        timestamp: startTime,
      });

      // Process bet (sends to Kafka)
      const result = await this.teenpattiService.placeBet(betData);

      // Send confirmation back to user
      const processingTime = Date.now() - startTime;
      client.emit('betAccepted', {
        ...result,
        processingTime,
      });

      // Broadcast to table (optional - or wait for consumer to do this)
      this.broadcastToTable(betData.tableId, 'betPlaced', {
        userId: betData.userId,
        amount: betData.amount,
        timestamp: Date.now(),
      });

    } catch (error) {
      this.logger.error(`Error placing bet: ${error.message}`, error.stack);
      client.emit('betError', {
        success: false,
        error: error.message,
        userId: betData.userId,
      });
    }
  }

  /**
   * Broadcast message to all clients at a specific table
   */
  broadcastToTable(tableId: string, event: string, data: any) {
    this.server.to(tableId).emit(event, data);
  }

  /**
   * Broadcast to specific user by userId (requires tracking userId -> socketId)
   */
  broadcastToUser(socketId: string, event: string, data: any) {
    const client = this.connectedClients.get(socketId);
    if (client) {
      client.emit(event, data);
    }
  }

  /**
   * Broadcast bet result after processing
   */
  broadcastBetResult(tableId: string, result: any) {
    this.server.to(tableId).emit('betResult', result);
  }

  /**
   * Get connection stats
   */
  getStats() {
    return {
      connectedClients: this.connectedClients.size,
      activeTables: this.tableSubscriptions.size,
      tables: Array.from(this.tableSubscriptions.entries()).map(([tableId, sockets]) => ({
        tableId,
        players: sockets.size,
      })),
    };
  }
}