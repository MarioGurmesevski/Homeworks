import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
  Min,
} from 'class-validator';
import { Animal, Gender } from '../interfaces/animal';

export class AnimalCreateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'The name of the animal',
    example: 'Dog',
  })
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @ApiProperty({
    type: Number,
    description: 'The age of the animal',
    example: 6,
  })
  age: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'The location of the animal',
    example: 'Skopje',
  })
  location: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(Gender)
  @ApiProperty({
    type: 'enum',
    enum: Gender,
    description: 'The status of the product',
    example: Gender.M,
  })
  gender: Gender;

  @IsObject()
  @ApiProperty({
    type: 'object',
    properties: {
      food: { type: 'array', items: { type: 'string' } },
      colour: { type: 'string' },
      isDangerous: { type: 'boolean' },
      weight: { type: 'number' },
      enclosure: { type: 'string' },
    },
    example: {
      food: ['meat', 'vegetables'],
      colour: 'brown',
      isDangerous: false,
      weight: 25,
      enclosure: 'Mountain',
    },
  })
  characteristics: {
    food: string[];
    colour: string;
    isDangerous: boolean;
    weight: number;
    enclosure: string;
  };
}

export class AnimalResponseDto extends AnimalCreateDto implements Animal {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'The id of the product',
    example: '643ee2209fcc9bc1502898cb',
  })
  id: string;
}
