import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

// function isAgeValid(age: number) {
//   return age >= 0 && age <= 100;
// }

export class zookeeperQueryDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    example: 'Skopje',
    description: 'Search by the location of the zookeeper',
  })
  location?: string;

  // @Validate(isAgeValid)
  @IsNumber()
  @IsOptional()
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
