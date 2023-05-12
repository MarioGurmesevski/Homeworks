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
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { ZookeepersService } from './zookeepers.service';
import {
  ZookeeperCreateDto,
  ZookeeperResponseDto,
  ZookeeperUpdateDto,
} from './dtos/zookeeper.dto';
import { zookeeperQueryDto } from './dtos/zookeeper-query.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesEnum } from '../auth/roles.enum';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';

@ApiBearerAuth()
@ApiTags('Zookeepers')
@Controller('zookeepers')
export class ZookeepersController {
  constructor(private readonly zookeeperService: ZookeepersService) {}

  @Roles(RolesEnum.admin, RolesEnum.editor)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  @UsePipes(ValidationPipe)
  createZookeeper(
    @Body() body: ZookeeperCreateDto,
  ): Promise<ZookeeperResponseDto> {
    return this.zookeeperService.createZookeeper(body);
  }

  @Roles(RolesEnum.admin, RolesEnum.editor, RolesEnum.user)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  getZookeeper(
    @Query() query: zookeeperQueryDto,
  ): Promise<ZookeeperResponseDto[]> {
    return this.zookeeperService.getZookeepers(query);
  }

  @Roles(RolesEnum.admin, RolesEnum.editor, RolesEnum.user)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('id/:id')
  getAnimalsById(@Param('id') id: string): Promise<ZookeeperResponseDto> {
    return this.zookeeperService.getZookeeperById(id);
  }

  @Roles(RolesEnum.admin, RolesEnum.editor)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Put('update/:id')
  @UsePipes(ValidationPipe)
  updateZookeeper(
    @Param('id') id: string,
    @Body() updateData: ZookeeperUpdateDto,
  ): Promise<ZookeeperResponseDto> {
    return this.zookeeperService.updateZookeeper(id, updateData);
  }

  @Roles(RolesEnum.admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete('delete/:id')
  @UsePipes(ValidationPipe)
  deleteZookeeper(@Param('id') id: string): Promise<any> {
    return this.zookeeperService.deleteZookeeper(id);
  }
}
