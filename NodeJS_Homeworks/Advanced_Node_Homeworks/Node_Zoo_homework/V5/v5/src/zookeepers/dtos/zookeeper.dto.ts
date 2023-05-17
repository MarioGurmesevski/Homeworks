import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
} from 'class-validator';
import { Zookeeper } from '../interfaces/zookeeper.interface';

enum Gender {
  M = 'Male',
  F = 'Female',
}

export class ZookeeperCreateDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    example: 'John Doe',
  })
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    type: Number,
    example: 30,
  })
  age: number;

  @IsNotEmpty()
  @ApiProperty({
    enum: Gender,
    example: Gender.M,
  })
  gender: Gender;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    example: 'Skopje',
  })
  location: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({
    type: Boolean,
    example: true,
  })
  isActive: boolean;
}

export class ZookeeperResponseDto
  extends ZookeeperCreateDto
  implements Zookeeper
{
  @IsNotEmpty()
  @IsUUID()
  id: string;
}

export class ZookeeperUpdateDto extends ZookeeperCreateDto {}
