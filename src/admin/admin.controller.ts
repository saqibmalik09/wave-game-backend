import { Body, Controller, Post, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { AdminService } from './admin.service';
import { CreateOrganizationDto } from './dto/create-tenant.dto';

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


}
