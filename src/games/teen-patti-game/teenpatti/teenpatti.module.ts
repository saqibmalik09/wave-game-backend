import { Module, forwardRef } from '@nestjs/common';
import { TeenpattiController } from './teenpatti.controller';
import { TeenpattiService } from './teenpatti.service';
import { SocketModule } from 'src/socket/socket.module';

@Module({
  imports: [SocketModule], //  also forwardRef here
  controllers: [TeenpattiController],
  providers: [TeenpattiService],
  exports: [TeenpattiService],
})
export class TeenpattiModule {}
