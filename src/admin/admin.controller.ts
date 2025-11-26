import { Body, Controller, Post, Get, HttpCode, HttpStatus, Param, Headers } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { AdminService } from './admin.service';
import { CreateOrganizationDto } from './dto/create-tenant.dto';
interface SubmitFlowDto {
  betAmount: number;
  type: number; // 1 = deduct, 2 = add
  transactionId: string;
}
@ApiTags('Admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  // ---------------- Create Organization ----------------
  @Post('organizations')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new organization (tenant)' })
  @ApiBody({
    description: 'Provide organization and database details for tenant creation',
    type: CreateOrganizationDto,
    examples: {
      example1: {
        summary: 'Example Tenant Creation',
        value: {
          name: 'Acme Games Ltd',
          email: 'admin@acmegames.com',
          phone: '+1234567890',
          dbHost: 'localhost',
          dbName: 'acme_games_db',
          dbUser: 'root',
          dbPassword: 'root',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Organization created successfully',
    schema: {
      example: {
        success: true,
        message: 'Organization created successfully',
        data: {
          id: 'org_001',
          name: 'Acme Games Ltd',
          dbName: 'acme_games_db',
        },
      },
    },
  })
  @ApiResponse({ status: 400, description: 'Validation failed' })
  async createOrganization(@Body() dto: CreateOrganizationDto) {
    return this.adminService.createOrganization(dto);
  }

  // ---------------- Get All Organizations ----------------
  @Get('organizations')
  @ApiOperation({ summary: 'Get list of all organizations (tenants)' })
  @ApiResponse({
    status: 200,
    description: 'List of organizations retrieved successfully',
    schema: {
      example: {
        success: true,
        message: 'Organizations fetched successfully',
        data: [
          {
            id: 'org_001',
            name: 'Acme Games Ltd',
            email: 'admin@acmegames.com',
            dbName: 'acme_games_db',
            dbHost: 'localhost',
          },
         
        ],
      },
    },
  })
  async getAllOrganizations() {
    return this.adminService.getAllOrganizations();
  }
  
  @Get('organizations/:orgId/users')
  @ApiOperation({ summary: 'Get all users for a specific tenant (organization)' })
  @ApiParam({ name: 'orgId', description: 'Organization ID' })
  @ApiResponse({
    status: 200,
    description: 'List of users from the tenant database',
    schema: {
      example: {
        success: true,
        message: 'Users fetched for organization: Acme Games Ltd',
        data: [
          {
            id: 'user_001',
            email: 'player1@acme.com',
            username: 'player1',
            role: 'player',
          },
        ],
      },
    },
  })
  async getTenantUsers(@Param('orgId') orgId: number) {
    return this.adminService.getTenantUsers(orgId);
  }
 

@Post('/game/create')
@HttpCode(HttpStatus.CREATED)
@ApiOperation({ summary: 'Create a new game in master database' })
@ApiBody({
  description: 'Game creation payload including config JSON',
  schema: {
    type: 'object',
    properties: {
      name: { type: 'string', example: 'Teen Patti' },
      description: { type: 'string', example: 'Teen Patti 3-card game' },
      appKey: { type: 'string', example: 'TP12345' },
      token: { type: 'string', example: 'secrettoken123' },
      status: { type: 'string', example: 'active' },
      config: {
        type: 'object',
        example: {
          gameId: 16,
          bettingCoins: [100, 500, 1000, 10000],
          cardImages: [
            ["https://deckofcardsapi.com/static/img/AS.png", "https://deckofcardsapi.com/static/img/2S.png", "https://deckofcardsapi.com/static/img/3S.png"],
            ["https://deckofcardsapi.com/static/img/4S.png", "https://deckofcardsapi.com/static/img/5S.png", "https://deckofcardsapi.com/static/img/6S.png"],
            ["https://deckofcardsapi.com/static/img/7S.png", "https://deckofcardsapi.com/static/img/8S.png", "https://deckofcardsapi.com/static/img/9S.png"]
          ],
          cardBackImages: [
            ["https://deckofcardsapi.com/static/img/back.png", "https://deckofcardsapi.com/static/img/back.png", "https://deckofcardsapi.com/static/img/back.png"],
            ["https://deckofcardsapi.com/static/img/back.png", "https://deckofcardsapi.com/static/img/back.png", "https://deckofcardsapi.com/static/img/back.png"],
            ["https://deckofcardsapi.com/static/img/back.png", "https://deckofcardsapi.com/static/img/back.png", "https://deckofcardsapi.com/static/img/back.png"]
          ],
          dealerAvatar: "https://i.pinimg.com/1200x/75/8e/93/758e934581866746e2c83d48c269f9a9.jpg",
          tableBackgroundImage: "https://cdn.hub88.io/onetouchlive/bg/ont_teenpatti20-20.jpg",
          betButtonAndCardClickSound: "https://yourdomain.com/button-click.mp3",
          timerUpSound: "https://yourdomain.com/timer-up.mp3",
          cardsShuffleSound: "https://yourdomain.com/cards-shuffling.mp3",
          returnWinngingPotPercentage: [1.9, 2.0, 2.5],
          colors: ["#33ff66", "#3366ff", "#ffcc00", "#9933ff"],
          winningCalculationTime: 3000,
          BettingTime: 40000,
          nextBetWait: 5000
        }
      }
    }
  }
})
@ApiResponse({
  status: 201,
  description: 'Game created successfully',
})
async createGame(@Body() body: any) {
  return await this.adminService.createGameInMaster(body);
}

  @Get('/game/configuration')
  @ApiOperation({ summary: 'Fetch all games from master DB' })
  @ApiResponse({
    status: 200,
    description: 'All games returned successfully',
  })
  async getAllGames() {
    return this.adminService.getAllGames();
  }

@Get('/game/configuration/:id')
@ApiOperation({ summary: 'Fetch game config by game ID' })
@ApiResponse({
  status: 200,
  description: 'Game config returned successfully',
})
async getGameById(@Param('id') id: string) {
  const gameId = parseInt(id, 10);

  if (isNaN(gameId)) {
    return {
      success: false,
      message: 'Invalid game ID',
      data: null,
    };
  }

  // Pass as an object to match your service method signature
  return this.adminService.waveGameConfiguration({ gameId });
}


@Get('/game/userInfo')
@HttpCode(HttpStatus.OK)
@ApiOperation({ summary: 'Fetch user info by token' })
@ApiResponse({
  status: 200,
  description: 'User info returned successfully',
  example: {
    success: true,
    message: 'User info fetched successfully',
    data: {
      id: 101,
      name: "John Doe",
      balance: 5400,
      profilePicture: "https://randomuser.me/api/portraits/men/75.jpg"
    }
  }
})
async gameUserInfo(@Headers('authorization') authHeader: string) {
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return {
      success: false,
      message: "Missing or invalid token",
      data: null
    };
  }

  const token = authHeader.split(' ')[1];

  // Validate token via service
  const user = await this.adminService.validateUserToken(token);

  if (!user) {
    return {
      success: false,
      message: "Invalid token or user not found",
      data: null
    };
  }

  return {
    success: true,
    message: "User info fetched successfully",
    data: user
  };
}


 @Post('game/submitFlow')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Submit game flow and update user balance' })
  async gameSubmitFlow(
    @Headers('authorization') authHeader: string,
    @Body() body: SubmitFlowDto,
  ) {
    if (!authHeader?.startsWith('Bearer ')) {
      return { success: false, message: 'Missing or invalid token', data: null };
    }

    const token = authHeader.split(' ')[1];
    const user = await this.adminService.validateUserToken(token);
    let userBalance=user.balance;
    if (!user) {
      return { success: false, message: 'Invalid token or user not found', data: null };
    }
    const { betAmount, type, transactionId } = body;
    if(userBalance<betAmount){
     return { success: false, message: 'Not enough balance.', data: user };
    }
    let newBalance=userBalance;
    // Update balance
    if (type === 1){
      newBalance=userBalance-betAmount;
    }else if (type === 2){
       newBalance=userBalance+betAmount;
      
    } 
    user.balance=newBalance;
    return {
      success: true,
      message: 'User info fetched successfully',
      data: user,
    };
  }
}
