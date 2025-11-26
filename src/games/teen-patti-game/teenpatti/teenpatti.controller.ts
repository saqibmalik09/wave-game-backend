import { Controller, Post, Get, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { TeenpattiService } from './teenpatti.service';
import { PlaceBetDto } from 'src/games/dto/place-bet.dto';

@ApiTags('Teenpatti')
@Controller('teenpatti')
export class TeenpattiController {
  constructor(private readonly teenpattiService: TeenpattiService) { }

  @Post('/start-timers')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Manually start the game timers' })
  async startTimersManually() {
    this.teenpattiService.startTimers();
    return { success: true, message: 'Timers started manually' };
  }

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
          appKey: 'aru28402',
          token: '423235eshifs0982',
          gameId: '16',
          type: 1, //1,2
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
    return this.teenpattiService.placeBetBatch(body);
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

  @Get('/game/result')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Teenpatti Game Winners Announce' })
  @ApiResponse({
    status: 200,
    description: 'Teenpatti game winners announcement',
    example: {
      success: true,
      message: 'Winners announced successfully',
      data: {
        winners: [
          {
            userId: 'user_123',
            amountWon: 1500,
            gameId: 16,
            imageProfile: 'https://randomuser.me/api/portraits/men/75.jpg',
          },
        ],
        winningPot: 'pot1',
        winningCards: [
          'https://deckofcardsapi.com/static/img/AS.png',
          'https://deckofcardsapi.com/static/img/2S.png',
          'https://deckofcardsapi.com/static/img/3S.png',
        ],
        winningPotRankText: 'Pair',
      },
    },
  })
  async teenPattiGameResult() {
    // ✅ Call logic from service — works for HTTP and Socket
    return this.teenpattiService.announceGameResult();
  }

  // @Post('/user/data')
  // @HttpCode(HttpStatus.OK)
  // @ApiOperation({ summary: 'Game Player Information: name, id, balance, profile' })
  // @ApiResponse({
  //   status: 200,
  //   description: 'Game Player Information',
  //   example: {
  //     success: true,
  //     message: 'User data fetched successfully',
  //     data: {
  //       user: [
  //         {
  //           userId: 'user_123',
  //           balance: 1500,
  //           gameId: 16,
  //           imageProfile: 'https://randomuser.me/api/portraits/men/75.jpg',
  //         },
  //       ],
  //     },
  //   },
  // })
  // async userData() {
  //   return this.teenpattiService.getUserData();
  // }



  //   // game players name id and profile pic  

  // @Post('/game/users/list')
  //   @HttpCode(HttpStatus.OK)
  //   @ApiOperation({ summary: 'Fetch game betting users by gameId' })
  //   @ApiBody({
  //     description: 'Provide the gameId to fetch its users',
  //     required: true,
  //     schema: {
  //       type: 'object',
  //       properties: {
  //         gameId: {
  //           type: 'number',
  //           example: 16,
  //           description: 'Unique ID of the game',
  //         },
  //       },
  //     },
  //   })
  //   @ApiResponse({
  //     status: 200,
  //     description: 'Returns the game betting users list',
  //     example: {
  //       success: true,
  //       message: 'Game users fetched successfully',
  //       data:  {
  //       users: [
  //         {
  //           userId: 'user_101',
  //           name: 'Alice',
  //           imageProfile: 'https://randomuser.me/api/portraits/women/65.jpg',
  //         },
  //         {
  //           userId: 'user_102',
  //           name: 'Bob',
  //           imageProfile: 'https://randomuser.me/api/portraits/men/66.jpg',
  //         },
  //         {
  //           userId: 'user_103',
  //           name: 'Charlie',
  //           imageProfile: 'https://randomuser.me/api/portraits/men/67.jpg', 
  //         },
  //       ]
  //     },
  //     },
  //   })
  //   async gamePlayersList(@Body('gameId') gameId: number) {
  //     // game Players name id and profile pic list object insde array

  //     return {
  //       success: true,
  //       message: 'Game players fetched successfully',
  //       data: {
  //       users: [
  //         {
  //           userId: 'user_101',
  //           name: 'Alice',
  //           imageProfile: 'https://randomuser.me/api/portraits/women/65.jpg',
  //         },
  //         {
  //           userId: 'user_102',
  //           name: 'Bob',
  //           imageProfile: 'https://randomuser.me/api/portraits/men/66.jpg',
  //         },
  //         {
  //           userId: 'user_103',
  //           name: 'Charlie',
  //           imageProfile: 'https://randomuser.me/api/portraits/men/67.jpg', 
  //         },
  //       ]
  //     }
  //   }
  // }



  // // game players name id and profile pic  
  // @Post('/potbetandusers/list')
  // @HttpCode(HttpStatus.OK)
  // @ApiOperation({ summary: 'Fetch game betting pots and user bet details by gameId' })
  // @ApiBody({
  //   description: 'Provide the gameId to fetch its pots, bets, and users',
  //   required: true,
  //   schema: {
  //     type: 'object',
  //     properties: {
  //       gameId: { type: 'number', example: 16, description: 'Unique ID of the game' },
  //     },
  //   },
  // })
  // @ApiResponse({
  //   status: 200,
  //   description: 'Returns the game betting pots list and user bets data',
  //   example: {
  //     success: true,
  //     message: 'Game bets fetched successfully',
  //     data: {
  //       pots: [
  //         { potName: 'pot1', betCoins: [50, 100, 100, 200, 500, 100, 50, 200], totalBetAmount: 1300 },
  //         { potName: 'pot2', betCoins: [100, 100, 200, 50, 500, 100], totalBetAmount: 1050 },
  //         { potName: 'pot3', betCoins: [50, 100, 100, 500, 200], totalBetAmount: 950 },
  //       ],
  //       users: [
  //         { userId: 'user_101', name: 'Alice', imageProfile: 'https://randomuser.me/api/portraits/women/65.jpg' },
  //         { userId: 'user_102', name: 'Bob', imageProfile: 'https://randomuser.me/api/portraits/men/66.jpg' },
  //         { userId: 'user_103', name: 'Charlie', imageProfile: 'https://randomuser.me/api/portraits/men/67.jpg' },
  //       ],
  //     },
  //   },
  // })
  // async gamePotBetAndUsersList(@Body() body: { gameId: number }) {
  //   const { gameId } = body;
  //   return this.teenpattiService.getPotBetsAndUsers(body);
  // }




}