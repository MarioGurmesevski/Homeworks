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
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { AnimalsService } from './animals.service';
import {
  AnimalAddToZookeeperDto,
  AnimalCreateDto,
  AnimalResponseDto,
  AnimalUpdateDto,
} from './dtos/animal.dto';
import { animalQueryDto } from './dtos/animal-query.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesEnum } from '../auth/roles.enum';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';

@ApiBearerAuth()
@ApiTags('Animals')
@Controller('animals')
export class AnimalsController {
  constructor(private readonly animalService: AnimalsService) {}

  @Roles(RolesEnum.admin, RolesEnum.editor)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  @UsePipes(ValidationPipe)
  createAnimal(@Body() body: AnimalCreateDto): Promise<AnimalResponseDto> {
    return this.animalService.createAnimal(body);
  }
  @Roles(RolesEnum.admin, RolesEnum.editor, RolesEnum.user)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  getAnimals(@Query() query: animalQueryDto): Promise<AnimalResponseDto[]> {
    return this.animalService.getAnimals(query);
  }

  @Roles(RolesEnum.admin, RolesEnum.editor, RolesEnum.user)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('id/:id')
  getAnimalsById(@Param('id') id: string): Promise<AnimalResponseDto> {
    return this.animalService.getAnimalById(id);
  }

  @Roles(RolesEnum.admin, RolesEnum.editor)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Put('update/:id')
  @UsePipes(ValidationPipe)
  updateAnimal(
    @Param('id') id: string,
    @Body() updateData: AnimalUpdateDto,
  ): Promise<AnimalResponseDto> {
    return this.animalService.updateAnimal(id, updateData);
  }

  @Roles(RolesEnum.admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete('delete/:id')
  @UsePipes(ValidationPipe)
  deleteAnimal(@Param('id') id: string): Promise<any> {
    return this.animalService.deleteAnimal(id);
  }

  @Roles(RolesEnum.admin, RolesEnum.editor)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch(':animalId/zookeeper/:zookeeperId')
  @UsePipes(ValidationPipe)
  addAnimalToZookeeper(@Param() params: AnimalAddToZookeeperDto) {
    return this.animalService.addAnimalToZookeeper(
      params.animalId,
      params.zookeeperId,
    );
  }
}
