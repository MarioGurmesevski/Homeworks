/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
  Get,
  Put,
  Param,
  Delete,
  Query,
  Patch,
} from '@nestjs/common';
import { AnimalsService } from './animals.service';
import {
  AnimalAddToZookeeperDto,
  AnimalCreateDto,
  AnimalResponseDto,
  AnimalUpdateDto,
} from './dtos/animal.dto';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { animalQueryDto } from './dtos/animal-query.dto';

@ApiTags('Animals')
@Controller('animals')
export class AnimalsController {
  constructor(private readonly animalService: AnimalsService) {}

  @ApiCreatedResponse({
    status: 201,
    description: 'The created animal',
  })
  @Post()
  @UsePipes(ValidationPipe)
  createAnimal(@Body() body: AnimalCreateDto): Promise<AnimalResponseDto> {
    return this.animalService.createAnimal(body);
  }

  @ApiResponse({
    status: 200,
    description: 'The  found animals',
  })
  @Get()
  getAnimals(@Query() query: animalQueryDto): Promise<AnimalResponseDto[]> {
    return this.animalService.getAnimals(query);
  }

  @Get('id/:id')
  getAnimalsById(@Param('id') id: string): Promise<AnimalResponseDto> {
    return this.animalService.getAnimalById(id);
  }

  @Put('update/:id')
  @UsePipes(ValidationPipe)
  @ApiResponse({
    status: 200,
    description: 'Successfully updated animal',
  })
  updateAnimal(
    @Param('id') id: string,
    @Body() updateData: AnimalUpdateDto,
  ): Promise<AnimalResponseDto> {
    return this.animalService.updateAnimal(id, updateData);
  }

  @Delete('delete/:id')
  @UsePipes(ValidationPipe)
  @ApiResponse({
    status: 200,
    description: 'Successfully deleted animal',
  })
  deleteAnimal(@Param('id') id: string): Promise<any> {
    return this.animalService.deleteAnimal(id);
  }

  @Patch(':animalId/zookeeper/:zookeeperId')
  @UsePipes(ValidationPipe)
  addAnimalToZookeeper(@Param() params: AnimalAddToZookeeperDto) {
    return this.animalService.addAnimalToZookeeper(
      params.animalId,
      params.zookeeperId,
    );
  }
}
