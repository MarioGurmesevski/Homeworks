import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Validate,
} from 'class-validator';

function isAgeValid(age: number): boolean {
  return age >= 5;
}

export class zookeeperQueryDto {
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
    example: 30,
  })
  age?: number;

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional({
    type: Boolean,
    example: true,
  })
  isActive?: boolean;
}
