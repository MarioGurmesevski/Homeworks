import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

enum Gender {
  M = 'Male',
  F = 'Female',
}

// function isAgeValid(age: number) {
//   return age >= 0 && age <= 100;
// }

export class animalQueryDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    example: 'Skopje',
    description: 'Search by the location of the animal',
  })
  location?: string;

  // @Validate(isAgeValid)
  @IsNumber()
  @IsOptional()
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
