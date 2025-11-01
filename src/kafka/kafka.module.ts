import { Module, Global } from '@nestjs/common';
import { KafkaService } from './kafka.service';
import { KafkaAdminService } from './kafka-admin.service';
import { KafkaController } from './kafka.controller';

@Global()
@Module({
  providers: [
    KafkaService,
    {
      provide: KafkaAdminService,
      useFactory: (kafkaService: KafkaService) => {
        return new KafkaAdminService(kafkaService.kafka);
      },
      inject: [KafkaService],
    },
  ],
  controllers: [KafkaController],
  exports: [KafkaService, KafkaAdminService],
})
export class KafkaModule {}