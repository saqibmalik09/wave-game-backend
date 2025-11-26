import { IsString, IsNumber, IsOptional, IsBoolean, Min, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTopicDto {
  @ApiProperty({ example: 'game.roulette.bets' })
  @IsString()
  topic: string;

  @ApiProperty({ example: 3, default: 1 })
  @IsNumber()
  @Min(1)
  @IsOptional()
  numPartitions?: number;

  @ApiProperty({ example: 1, default: 1 })
  @IsNumber()
  @Min(1)
  @IsOptional()
  replicationFactor?: number;

  @ApiProperty({ example: { 'compression.type': 'gzip', 'retention.ms': '604800000' }, required: false })
  @IsOptional()
  configs?: Record<string, string>;
}

export class UpdatePartitionsDto {
  @ApiProperty({ example: 'game.teenpatti.bets' })
  @IsString()
  topic: string;

  @ApiProperty({ example: 5 })
  @IsNumber()
  @Min(1)
  totalPartitions: number;
}

export class CreateConsumerDto {
  @ApiProperty({ example: 'teenpatti-engine' })
  @IsString()
  groupId: string;

  @ApiProperty({ example: ['game.teenpatti.bets'] })
  @IsArray()
  @IsString({ each: true })
  topics: string[];

  @ApiProperty({ example: false, default: false })
  @IsBoolean()
  @IsOptional()
  fromBeginning?: boolean;
}

export class DeleteTopicDto {
  @ApiProperty({ example: 'game.teenpatti.bets' })
  @IsString()
  topic: string;
}

export class AlterTopicConfigDto {
  @ApiProperty({ example: 'game.teenpatti.bets' })
  @IsString()
  topic: string;

  @ApiProperty({ 
    example: { 
      'retention.ms': '604800000',
      'compression.type': 'gzip',
      'max.message.bytes': '10485760'
    } 
  })
  configs: Record<string, string>;
}