// src/admin/admin.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrganizationDto } from './dto/create-tenant.dto';
import { getTenantPrisma } from '../prisma/tenant.service';
import mysql from 'mysql2/promise';
import { execSync } from 'child_process';

@Injectable()
export class AdminService {
  constructor(private readonly master: PrismaService) {}

  async createOrganization(dto: CreateOrganizationDto) {
    // 1️⃣ Create tenant DB dynamically
    const connection = await mysql.createConnection({
      host: dto.dbHost,
      user: dto.dbUser,
      password: dto.dbPassword,
    });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dto.dbName}\`;`);
    await connection.end();

    // 2️⃣ Deploy tenant migrations into the new DB
    try {
      const tenantDbUrl = `mysql://${dto.dbUser}:${dto.dbPassword}@${dto.dbHost}:3306/${dto.dbName}`;
        execSync(`npx prisma migrate deploy --schema=prisma/tenant/schema.prisma`, {
          stdio: "inherit",
          env: {
            ...process.env,
            DATABASE_URL: tenantDbUrl, // Prisma expects DATABASE_URL, not TENANT_DATABASE_URL
          },
        });



    } catch (err) {
      throw new Error(`Failed to run tenant migrations: ${err.message}`);
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

    return { message: 'Organization created & tenant DB ready', org };
  }
}
