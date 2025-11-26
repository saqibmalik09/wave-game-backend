import { Module, forwardRef } from '@nestjs/common';
import { TeenpattiController } from './teenpatti.controller';
import { TeenpattiService } from './teenpatti.service';
import { TeenpattiConsumer } from './teenpatti.consumer';
import { KafkaModule } from 'src/kafka/kafka.module';
import { SocketModule } from 'src/socket/socket.module';

@Module({
  imports: [KafkaModule, forwardRef(() => SocketModule)], // ✅ also forwardRef here
  controllers: [TeenpattiController],
  providers: [TeenpattiService, TeenpattiConsumer],
  exports: [TeenpattiService],
})
export class TeenpattiModule {}
