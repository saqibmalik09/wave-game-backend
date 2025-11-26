import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { PrismaModule } from './prisma/prisma.module';
import { KafkaModule } from './kafka/kafka.module';
import { TeenpattiModule } from './games/teen-patti-game/teenpatti/teenpatti.module';
import { FruitsModule } from './games/fruits-game/fruits/fruits.module';
import { TenantOrOrganizationModule } from './tenant-or-organization/tenant-or-organization.module';
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      }),
    AdminModule,
    PrismaModule,
    KafkaModule,
    TeenpattiModule,
    FruitsModule,
    TenantOrOrganizationModule,
    SocketModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
