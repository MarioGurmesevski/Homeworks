/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Put,
} from '@nestjs/common';
import { AnimalCreateDto, AnimalResponseDto } from './dtos/animal.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AnimalsService } from './animals.service';

@ApiTags('Animals')
@Controller('/animals')
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) {}

  @Get()
  @UsePipes(ValidationPipe)
  @ApiResponse({
    status: 200,
    description: 'The found Animals',
  })
  getAnimals(): Promise<AnimalResponseDto[]> {
    return this.animalsService.getAnimals();
  }
}
