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
  async getTenantUsers(@Param('orgId') orgId: string) {
    return this.adminService.getTenantUsers(orgId);
  }


@Post('/game/configuration')
@HttpCode(HttpStatus.OK)
@ApiOperation({ summary: 'Fetch game betting coins and configuration by gameId' })
@ApiBody({
  description: 'Provide the gameId to fetch its configuration',
  required: true,
  schema: {
    type: 'object',
    properties: {
      gameId: { type: 'number', example: 16, description: 'Unique ID of the game' },
    },
  },
})
@ApiResponse({
  status: 200,
  description: 'Returns the game betting configuration',
  example: {
    success: true,
    message: 'Game configuration fetched successfully',
    data: {
      gameId: 16,
      bettingCoins: [10, 50, 100, 500, 1000],
      colors: ['red', 'green', 'blue', 'yellow'],
    },
  },
})
async gameConfiguration(@Body() body: { gameId: number }) {
  const { gameId } = body;

  if (!gameId || typeof gameId !== 'number') {
    return {
      success: false,
      message: 'Invalid or missing gameId in request body.',
      data: null,
    };
  }

  const config = await this.adminService.waveGameConfiguration(body);

  if (!config) {
    return {
      success: false,
      message: `No configuration found for gameId ${gameId}`,
      data: null,
    };
  }

  return {
    success: true,
    message: 'Game configuration fetched successfully',
    data: config,
  };
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
