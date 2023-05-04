import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Validate,
} from 'class-validator';

enum Gender {
  M = 'Male',
  F = 'Female',
}

export class animalQueryDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    example: 'Skopje',
    description: 'Search by the location of the animal',
  })
  location?: string;

  @IsNumber()
  @IsOptional()
  @Validate(() => (age: number): boolean => {
    return;
  })
  @ApiPropertyOptional({
    type: Number,
    example: 6,
    description: 'Search by the age of the animal',
  })
  age?: number;

  @IsEnum(Gender)
  @IsOptional()
  @ApiPropertyOptional({
    enum: Gender,
    example: Gender.M,
    description: 'Search by the gender of the animal',
  })
  gender?: Gender;
}
