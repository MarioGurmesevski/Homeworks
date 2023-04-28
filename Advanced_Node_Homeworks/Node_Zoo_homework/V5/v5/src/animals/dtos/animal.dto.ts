import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { Animal } from '../interfaces/animal.interface';

enum Gender {
  M = 'Male',
  F = 'Female',
}

export class CharacteristicsDto {
  @IsNotEmpty()
  @IsString({ each: true })
  @ApiProperty({
    type: [String],
    example: ['meat', 'fruit', 'vegetables'],
  })
  food: string[];

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    example: 'brown',
  })
  colour: string;

  @IsNotEmpty()
  @IsBoolean()
  @ApiProperty({
    type: Boolean,
    example: true,
  })
  isDangerous: boolean;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    type: Number,
    example: 100,
  })
  weight: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    example: 'Mountain',
  })
  enclosure: string;
}

export class AnimalCreateDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    example: 'Dog',
  })
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    type: Number,
    example: 4,
  })
  age: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    example: 'Macedonia',
  })
  location: string;

  @IsNotEmpty()
  @ApiProperty({
    enum: Gender,
    example: Gender.M,
  })
  gender: Gender;

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    example: 'aab8f88b-52ff-4339-9263-54e4427c42bc',
  })
  zookeeperID?: string;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty({
    type: CharacteristicsDto,
  })
  characteristics: CharacteristicsDto;
}

export class AnimalResponseDto extends AnimalCreateDto implements Animal {
  @IsNotEmpty()
  @IsUUID()
  id: string;
}

export class AnimalUpdateDto extends AnimalCreateDto {}
