import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrganizationDto } from './dto/create-tenant.dto';
import { getTenantPrisma } from '../prisma/tenant.service';
import mysql from 'mysql2/promise';
import { execSync } from 'child_process';
import { errorResponse, successResponse } from 'src/common/response/response-helper';

@Injectable()
export class AdminService {
  constructor(private readonly master: PrismaService) {}

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
}
