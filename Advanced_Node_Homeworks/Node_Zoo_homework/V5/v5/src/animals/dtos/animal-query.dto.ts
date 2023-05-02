import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Validate,
} from 'class-validator';

function isAgeValid(age: number): boolean {
  return age >= 5;
}

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
  })
  location?: string;

  @IsNumber()
  @IsOptional()
  @Validate(isAgeValid)
  @ApiPropertyOptional({
    type: Number,
    example: 6,
  })
  age?: number;

  @IsEnum(Gender)
  @IsOptional()
  @ApiPropertyOptional({
    enum: Gender,
    example: Gender.M,
  })
  gender?: Gender;
}
