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

  @Get('/game/result')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Teenpatti Game Winners Announce' })
  @ApiResponse({
    status: 200, description: 'teenpatti game bet placed winners', example: {
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
        winningCards: ['https://deckofcardsapi.com/static/img/AS.png', 'https://deckofcardsapi.com/static/img/2S.png', 'https://deckofcardsapi.com/static/img/3S.png'],
        winningPotRankText: "Pair"
      }
    }
  })
  async teenPattiGameResult() {
    // this.teenpattiService.();
    return {
      success: true,
      message: 'Winners announced successfully',
      data: {
        winners: [
          {
            userId: 'user_123',
            amountWon: 1500,
            gameId: 16,
            imageProfile: 'https://randomuser.me/api/portraits/men/75.jpg',
            winningPotRankText: "Pair",
            winningPot: 'pot1',
            winningCards: ['https://deckofcardsapi.com/static/img/AS.png', 'https://deckofcardsapi.com/static/img/2S.png', 'https://deckofcardsapi.com/static/img/3S.png'],

          },
        ]
      }
    };
  }


  @Post('/user/data')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Game Player Information name id and profile' })
  @ApiResponse({
    status: 200, description: 'Game Player Information name id and other data', example: {
      success: true,
      message: 'User data fetched successfully',
      data: {
        user: [
          {
            userId: 'user_123',
            balance: 1500,
            gameId: 16,
            imageProfile: 'https://randomuser.me/api/portraits/men/75.jpg',

          },
        ]
      }
    }
  })
  async userData() {
    // this.teenpattiService.();
    return {
      success: true,
      message: 'User data fetched successfully',
      data: {
        user: [
          {
            userId: 'user_123',
            balance: 1500,
            gameId: 16,
            imageProfile: 'https://randomuser.me/api/portraits/men/75.jpg',

          },
        ]
      }
    };
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
        gameId: {
          type: 'number',
          example: 16,
          description: 'Unique ID of the game',
        },
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
        returnWinngingPotPercentage: [1.9,2.0,2.5],
        colors: ['red', 'green', 'blue', 'yellow'],
        winningCalculationTime: 3000, 
        BettingTime: 30000,
        nextBetWait:5000,
      },
    },
  })
  
  async gameConfiguration(@Body('gameId') gameId: number) {
    // ✅ Local configuration store (you can later move this to DB/service)
    const gameConfigs: Record<number, any> = {
      16: {
        gameId: 16,
        bettingCoins: [10, 50, 100, 500, 1000],
        // teen patti game have 3 pots and each pot will show different random three cards in each round at winning calculation time
        // so we can have array of images for each pot like below take images from random some source   
        cardImages: [
          ['https://deckofcardsapi.com/static/img/AS.png', 'https://deckofcardsapi.com/static/img/2S.png', 'https://deckofcardsapi.com/static/img/3S.png'],
          ['https://deckofcardsapi.com/static/img/4S.png', 'https://deckofcardsapi.com/static/img/5S.png', 'https://deckofcardsapi.com/static/img/6S.png'],
          ['https://deckofcardsapi.com/static/img/7S.png', 'https://deckofcardsapi.com/static/img/8S.png', 'https://deckofcardsapi.com/static/img/9S.png'],
        ], 
        // teenpatti three cards images as opposite side of these cards that will be shown before winning calculation time each port 
        // each pot will show 3 images in each port same like cardImages above
        cardBackImages: [
          ['https://deckofcardsapi.com/static/img/back.png', 'https://deckofcardsapi.com/static/img/back.png', 'https://deckofcardsapi.com/static/img/back.png'],
          ['https://deckofcardsapi.com/static/img/back.png', 'https://deckofcardsapi.com/static/img/back.png', 'https://deckofcardsapi.com/static/img/back.png'],
          ['https://deckofcardsapi.com/static/img/back.png', 'https://deckofcardsapi.com/static/img/back.png', 'https://deckofcardsapi.com/static/img/back.png'],
        ],
        
        //show a dealer avatar image for teenpatti game table girl hot on top of the table will show watching and smiling avatar not real girl hot image from face to belly 
        dealerAvatar: 'https://i.pinimg.com/1200x/75/8e/93/758e934581866746e2c83d48c269f9a9.jpg',
        // background image for teenpatti game table
        tableBackgroundImage: 'https://cdn.hub88.io/onetouchlive/bg/ont_teenpatti20-20.jpg',
        //bet button click sound effect url which is in public games folder and assets folder then teenpatti folder and button-click.mp3 attach  base url in env stored as APP_URL KEY before this url

        betButtonAndCardClickSound: `${process.env.APP_URL}/button-click.mp3`,
        //card dealing sound effect url which is in public games folder and assets folder then teenpatti folder and card-deal.mp3 attach  base url in env stored as APP_URL KEY before this url'
        timerUpSound: `${process.env.APP_URL}/timer-up.mp3`,
        cardsShuffleSound: `${process.env.APP_URL}/cards-shuffling.mp3`,
        
        returnWinngingPotPercentage: [1.9,2.0,2.5],
        colors: ['red', 'green', 'blue', 'yellow'],
        winningCalculationTime: 3000, 
        BettingTime: 40000,
        nextBetWait:5000,
      },
      2003: {
        gameId: 2003,
        bettingCoins: [5, 25, 50, 250, 500],
        returnWinngingPotPercentage: [3.9,1.0,2.5],
        colors: ['black', 'white', 'gold'],
        winningCalculationTime: 3000, 
        BettingTime: 30000,
        nextBetWait:5000,
      },
      77: {
        gameId: 77,
        bettingCoins: [1, 2, 5, 10],
        returnWinngingPotPercentage: [2.9,3.0,4.5],
        colors: ['purple', 'orange'],
        winningCalculationTime: 3000, 
        BettingTime: 30000,
        nextBetWait:5000,
      },
    };

    const gameConfig = gameConfigs[gameId];

    if (!gameConfig) {
      return {
        success: false,
        message: `No configuration found for gameId ${gameId}`,
        data: null,
      };
    }

    return {
      success: true,
      message: 'Game configuration fetched successfully',
      data: gameConfig,
    };
  }


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



  // game players name id and profile pic  
 @Post('/game/potbetandusers/list')
@HttpCode(HttpStatus.OK)
@ApiOperation({ summary: 'Fetch game betting pots and user bet details by gameId' })
@ApiBody({
  description: 'Provide the gameId to fetch its pots, bets, and users',
  required: true,
  schema: {
    type: 'object',
    properties: {
      gameId: {
        type: 'number',
        example: 16,
        description: 'Unique ID of the game',
      },
    },
  },
})
@ApiResponse({
  status: 200,
  description: 'Returns the game betting pots list and user bets data',
  example: {
    success: true,
    message: 'Game bets fetched successfully',
    data: {
      pots: [
        {
          potName: 'pot1',
          betCoins: [50, 100, 100, 200, 500, 100, 50, 200],
          totalBetAmount: 1300,
        },
        {
          potName: 'pot2',
          betCoins: [100, 100, 200, 50, 500, 100],
          totalBetAmount: 1050,
        },
        {
          potName: 'pot3',
          betCoins: [50, 100, 100, 500, 200],
          totalBetAmount: 950,
        },
      ],
      users: [
        {
          userId: 'user_101',
          name: 'Alice',
          imageProfile: 'https://randomuser.me/api/portraits/women/65.jpg',
        },
        {
          userId: 'user_102',
          name: 'Bob',
          imageProfile: 'https://randomuser.me/api/portraits/men/66.jpg',
        },
        {
          userId: 'user_103',
          name: 'Charlie',
          imageProfile: 'https://randomuser.me/api/portraits/men/67.jpg',
        },
      ],
    },
  },
})
async gamebetList(@Body('gameId') gameId: number) {
  // Example static configuration (can be dynamic later)
  const potData = {
    16: [
      {
        potName: 'pot1',
        betCoins: [50, 100, 100, 200, 500, 100, 50, 200],
      },
      {
        potName: 'pot2',
        betCoins: [100, 100, 200, 50, 500, 100],
      },
      {
        potName: 'pot3',
        betCoins: [50, 100, 100, 500, 200],
      },
    ],
    2003: [
      {
        potName: 'pot1',
        betCoins: [25, 50, 100, 25, 50],
      },
      {
        potName: 'pot2',
        betCoins: [50, 25, 50, 25],
      },
      {
        potName: 'pot3',
        betCoins: [25, 25, 50],
      },
    ],
    77: [
      {
        potName: 'pot1',
        betCoins: [5, 10, 10, 5],
      },
      {
        potName: 'pot2',
        betCoins: [2, 5, 10],
      },
      {
        potName: 'pot3',
        betCoins: [1, 2, 5],
      },
    ],
  };

  const pots = potData[gameId];

  if (!pots) {
    return {
      success: false,
      message: `No pots data found for gameId ${gameId}`,
      data: null,
    };
  }

  // Calculate total bet amount per pot
  const potsWithTotal = pots.map(pot => ({
    ...pot,
    totalBetAmount: pot.betCoins.reduce((sum, c) => sum + c, 0),
  }));

  // Mock user data (could come from DB)
  const users = [
    {
      userId: 'user_101',
      name: 'Alice',
      imageProfile: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
      userId: 'user_102',
      name: 'Bob',
      imageProfile: 'https://randomuser.me/api/portraits/men/66.jpg',
    },
    {
      userId: 'user_103',
      name: 'Charlie',
      imageProfile: 'https://randomuser.me/api/portraits/men/67.jpg',
    },
  ];

  return {
    success: true,
    message: 'Game bets fetched successfully',
    data: {
      pots: potsWithTotal,
      users,
    },
  };
}



}