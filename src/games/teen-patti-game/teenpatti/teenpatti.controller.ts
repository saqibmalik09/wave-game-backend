import { Controller, Post, Get, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { TeenpattiService } from './teenpatti.service';
import { PlaceBetDto } from 'src/games/dto/place-bet.dto';

@ApiTags('Teenpatti')
@Controller('teenpatti')
export class TeenpattiController {
  constructor(private readonly teenpattiService: TeenpattiService) {}

  @Post('bet')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Place a single Teenpatti bet (HTTP)' })
  @ApiBody({
    description: 'Bet details for Teenpatti game',
    type: PlaceBetDto,
    examples: {
      example1: {
        summary: 'Example Bet',
        value: {
          userId: 'user_123',
          amount: 500,
          tableId: 'table_456',
          betType: 'player',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Bet placed successfully',
    schema: {
      example: {
        success: true,
        message: 'Bet accepted for processing',
        data: {
          betId: 'abc-123-def',
          userId: 'user_123',
          amount: 500,
          tableId: 'table_456',
          game: 'teenpatti',
          timestamp: 1704067200000,
          status: 'pending',
        },
      },
    },
  })
  @ApiResponse({ status: 400, description: 'Invalid bet parameters' })
  async placeBet(@Body() bet: PlaceBetDto) {
    return this.teenpattiService.placeBet(bet);
  }

  @Post('bet/batch')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Place multiple bets at once (Load Testing)' })
  @ApiBody({
    description: 'Array of bet details',
    schema: {
      type: 'object',
      properties: {
        bets: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              userId: { type: 'string' },
              amount: { type: 'number' },
              tableId: { type: 'string' },
              betType: { type: 'string' },
            },
          },
        },
      },
    },
    examples: {
      example1: {
        summary: 'Batch Bets',
        value: {
          bets: [
            { userId: 'user_1', amount: 100, tableId: 'table_1', betType: 'player' },
            { userId: 'user_2', amount: 200, tableId: 'table_1', betType: 'banker' },
            { userId: 'user_3', amount: 300, tableId: 'table_2', betType: 'tie' },
          ],
        },
      },
    },
  })
  @ApiResponse({ status: 201, description: 'Batch bets accepted' })
  async placeBetBatch(@Body() body: { bets: PlaceBetDto[] }) {
    return this.teenpattiService.placeBetBatch(body.bets);
  }

  @Get('metrics')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get betting throughput metrics' })
  @ApiResponse({ status: 200, description: 'Metrics returned' })
  async getMetrics() {
    return {
      success: true,
      producer: this.teenpattiService.getMetrics(),
    };
  }

  @Post('metrics/reset')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Reset metrics counters' })
  @ApiResponse({ status: 200, description: 'Metrics reset' })
  async resetMetrics() {
    this.teenpattiService.resetMetrics();
    return {
      success: true,
      message: 'Metrics reset successfully',
    };
  }
}