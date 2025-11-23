import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrganizationDto } from './dto/create-tenant.dto';
import { getTenantPrisma } from '../prisma/tenant.service';
import mysql from 'mysql2/promise';
import { execSync } from 'child_process';
import { errorResponse, successResponse } from 'src/common/response/response-helper';
import { v4 as uuidv4 } from 'uuid';
import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
  SubscribeMessage,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';


@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
@Injectable()
export class AdminService implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly master: PrismaService) {}
  @WebSocketServer()
  server: Server;

  afterInit(server: Server) {
    console.log(' Teenpatti Gateway Initialized');
  }

  handleConnection(client: Socket) {
    console.log(` Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  // ✅ Create new organization and tenant DB
  async createOrganization(dto: CreateOrganizationDto) {
    try {
      // 1️⃣ Create tenant DB dynamically
      const connection = await mysql.createConnection({
        host: dto.dbHost,
        user: dto.dbUser,
        password: dto.dbPassword,
      });

      await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dto.dbName}\`;`);
      await connection.end();

      // 2️⃣ Deploy tenant migrations
      const tenantDbUrl = `mysql://${dto.dbUser}:${dto.dbPassword}@${dto.dbHost}:3306/${dto.dbName}`;
      try {
        execSync(`npx prisma migrate deploy --schema=prisma/tenant/schema.prisma`, {
          stdio: 'inherit',
          env: {
            ...process.env,
            DATABASE_URL: tenantDbUrl,
          },
        });
      } catch (err) {
        return errorResponse(
          `Failed to run tenant migrations: ${err.message}`,
          null,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }

      // 3️⃣ Save org in master DB
      const org = await this.master.organization.create({
        data: {
          name: dto.name,
          email: dto.email,
          dbHost: dto.dbHost,
          dbName: dto.dbName,
          dbUser: dto.dbUser,
          dbPassword: dto.dbPassword,
        },
      });

      // 4️⃣ Test tenant connection
      const tenantPrisma = await getTenantPrisma(org);
      await tenantPrisma.$connect();
      await tenantPrisma.$disconnect();

      return successResponse(
        'Organization created & tenant DB ready',
        org,
        HttpStatus.OK,
      );
    } catch (error) {
      return errorResponse(
        'Failed to create organization',
        error.message,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
  }

  // ✅ Get all organizations
  async getAllOrganizations() {
    try {
      const orgs = await this.master.organization.findMany();
      return successResponse(
        'Organizations fetched successfully',
        orgs,
        HttpStatus.OK,
      );
    } catch (error) {
      return errorResponse(
        'Failed to fetch organizations',
        error.message,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
  }

  // ✅ Get Tenant Users by Organization ID
  async getTenantUsers(orgId: string) {
    try {
      const org = await this.master.organization.findUnique({
        where: { id: orgId },
      });

      if (!org) {
        return errorResponse(
          `Organization not found with ID: ${orgId}`,
          null,
          HttpStatus.OK,
        );
      }

      const tenantPrisma = await getTenantPrisma(org);
      const users = await tenantPrisma.user.findMany();
      await tenantPrisma.$disconnect();

      return successResponse(
        `Users fetched for organization: ${org.name}`,
        users,
        HttpStatus.OK,
      );
    } catch (error) {
      return errorResponse(
        'Failed to fetch tenant users',
        error.message,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
  }

@SubscribeMessage('gameConfiguration')
async waveGameConfiguration( @MessageBody() { gameId }: { gameId: number }) {
 {
 const gameConfigs: Record<number, any> = {
    16: {
      gameId: 16,
      bettingCoins: [100, 500, 1000,10000],
      cardImages: [
        ['https://deckofcardsapi.com/static/img/AS.png', 'https://deckofcardsapi.com/static/img/2S.png', 'https://deckofcardsapi.com/static/img/3S.png'],
        ['https://deckofcardsapi.com/static/img/4S.png', 'https://deckofcardsapi.com/static/img/5S.png', 'https://deckofcardsapi.com/static/img/6S.png'],
        ['https://deckofcardsapi.com/static/img/7S.png', 'https://deckofcardsapi.com/static/img/8S.png', 'https://deckofcardsapi.com/static/img/9S.png'],
      ],
      cardBackImages: [
        ['https://deckofcardsapi.com/static/img/back.png', 'https://deckofcardsapi.com/static/img/back.png', 'https://deckofcardsapi.com/static/img/back.png'],
        ['https://deckofcardsapi.com/static/img/back.png', 'https://deckofcardsapi.com/static/img/back.png', 'https://deckofcardsapi.com/static/img/back.png'],
        ['https://deckofcardsapi.com/static/img/back.png', 'https://deckofcardsapi.com/static/img/back.png', 'https://deckofcardsapi.com/static/img/back.png'],
      ],
      dealerAvatar: 'https://i.pinimg.com/1200x/75/8e/93/758e934581866746e2c83d48c269f9a9.jpg',
      tableBackgroundImage: 'https://cdn.hub88.io/onetouchlive/bg/ont_teenpatti20-20.jpg',
      betButtonAndCardClickSound: `${process.env.APP_URL}/button-click.mp3`,
      timerUpSound: `${process.env.APP_URL}/timer-up.mp3`,
      cardsShuffleSound: `${process.env.APP_URL}/cards-shuffling.mp3`,
      returnWinngingPotPercentage: [1.9, 2.0, 2.5],
      colors: [ '#33ff66', '#3366ff', '#ffcc00','#9933ff'],
      winningCalculationTime: 3000,
      BettingTime: 40000,
      nextBetWait: 5000,
    },
    2003: {
      gameId: 2003,
      bettingCoins: [5, 25, 50, 250, 500],
      returnWinngingPotPercentage: [3.9, 1.0, 2.5],
      colors: ['black', 'white', 'gold'],
      winningCalculationTime: 3000,
      BettingTime: 30000,
      nextBetWait: 5000,
    },
    77: {
      gameId: 77,
      bettingCoins: [1, 2, 5, 10],
      returnWinngingPotPercentage: [2.9, 3.0, 4.5],
      colors: ['purple', 'orange'],
      winningCalculationTime: 3000,
      BettingTime: 30000,
      nextBetWait: 5000,
    },
  };
  if (!gameId || typeof gameId !== "number") {
    const response = {
      success: false,
      message: "Invalid or missing gameId",
      data: null,
    };
    this.server.emit("gameConfigurationResponse", response);
    return response;
  }

  const gameConfig = gameConfigs[gameId];

  if (!gameConfig) {
    const response = {
      success: false,
      message: `No configuration found for gameId ${gameId}`,
      data: null,
    };
    this.server.emit("gameConfigurationResponse", response);
    return response;
  }

  const response = {
    success: true,
    message: "Game configuration fetched successfully",
    data: gameConfig,
  };

  // 🎯 Emit only to requesting client
  this.server.emit("gameConfigurationResponse", response);

  return response;
}
}
@SubscribeMessage('tenantDetailsByAppKey')
async tenantDetailsByAppKey(@MessageBody() body: { appKey: string }) {
 const appKey = body.appKey;
  const appKeyConfigs: Record<string, any> = {
    "Eeb1GshW3a": {
      activeGames: "16,2003,77",
      tanantName: "Ricolive",
      tenantAppKey: "Eeb1GshW3a",
      tenantProductionDomain: "127.0.0.0:4005",
      tenantTestingDomain: "https://sandbox.ricolivee.vip/",
      tenantPassword: "24563672ER",
    },
    "b1K7dw2MZ3": {
      activeGames: "16,2003,77",
      tanantName: "Banolive",
      tenantAppKey: "b1K7dw2MZ3",
      tenantProductionDomain: "https://banolive.com/",
      tenantTestingDomain: "https://test.banolive.com/",
      tenantPassword: "22578672ER",
    },
    "2FUSmZfG0A": {
      activeGames: "16,2003,77",
      tanantName: "Fruity",
      tenantAppKey: "2FUSmZfG0A",
      tenantProductionDomain: "https://fruitylivy.com/",
      tenantTestingDomain: "https://socket.fruitylivy.com/",
      tenantPassword: "4357983jf",
    },
  };
  console.log("appKey:",appKey)
  if (!appKey || typeof appKey !== "string") {
    const response = {
      success: false,
      message: "Invalid or missing appKey",
      data: null,
    };

    this.server.emit("tenantDetailsByAppKeyResponse", response);
    return response;
  }
  const tenantDetails = appKeyConfigs[appKey];

  if (!tenantDetails) {
    const response = {
      success: false,
      message: `No configuration found for tenant key ${appKey}`,
      data: null,
    };

    this.server.emit("tenantDetailsByAppKeyResponse", response);
    return response;
  }
  const response = {
    success: true,
    message: "Tenant configuration fetched successfully",
    data: tenantDetails,
  };

  this.server.emit("tenantDetailsByAppKeyResponse", response);
  return response;
}


 private users = {
    "token123": {
      id: "10144et4",
      name: "John Doe",
      balance: 912000,
      profilePicture: "https://randomuser.me/api/portraits/men/70.jpg",
    },
    "abc999": {
      id: "202578232",
      name: "Saqib Malik",
      balance: 12000,
      profilePicture: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    "urwhj234": {
      id: "202553452",
      name: "Saqib Malik",
      balance: 56978,
      profilePicture: "https://randomuser.me/api/portraits/men/59.jpg",
    }
  };
  

  async validateUserToken(token: string) {
    return this.users[token] || null;
  }

  async gameSubmitFlow(token: string) {
    return this.users[token] || null;
  }

}



