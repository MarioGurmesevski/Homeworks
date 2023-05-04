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
    description: 'Search by the location of the zookeeper',
  })
  location?: string;

  @IsNumber()
  @IsOptional()
  @Validate(isAgeValid)
  @ApiPropertyOptional({
    type: Number,
    example: 30,
    description: 'Search by the age of the zookeeper',
  })
  age?: number;

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional({
    type: Boolean,
    example: true,
    description: 'Search if the zookeeper is active',
  })
  isActive?: boolean;
}
