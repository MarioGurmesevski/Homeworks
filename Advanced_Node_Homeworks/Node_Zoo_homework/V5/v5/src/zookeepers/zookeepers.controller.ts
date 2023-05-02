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
} from '@nestjs/common';

import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ZookeepersService } from './zookeepers.service';
import {
  ZookeeperCreateDto,
  ZookeeperResponseDto,
  ZookeeperUpdateDto,
} from './dtos/zookeeper.dto';
import { zookeeperQueryDto } from './dtos/zookeeper-query.dto';

@ApiTags('Zookeepers')
@Controller('zookeepers')
export class ZookeepersController {
  constructor(private readonly zookeeperService: ZookeepersService) {}

  @ApiCreatedResponse({
    status: 201,
    description: 'The created zookeeper',
  })
  @Post()
  @UsePipes(ValidationPipe)
  createZookeeper(
    @Body() body: ZookeeperCreateDto,
  ): Promise<ZookeeperResponseDto> {
    return this.zookeeperService.createZookeeper(body);
  }
  @ApiResponse({
    status: 200,
    description: 'The  found zookeeper',
  })
  @Get()
  getZookeeper(
    @Query() query: zookeeperQueryDto,
  ): Promise<ZookeeperResponseDto[]> {
    return this.zookeeperService.getZookeepers(query);
  }
  @Put(':id')
  @UsePipes(ValidationPipe)
  @ApiResponse({
    status: 200,
    description: 'Successfully updated zookeeper',
  })
  updateZookeeper(
    @Param('id') id: string,
    @Body() updateData: ZookeeperUpdateDto,
  ): Promise<ZookeeperResponseDto> {
    return this.zookeeperService.updateZookeeper(id, updateData);
  }
  @Delete(':id/delete')
  @UsePipes(ValidationPipe)
  @ApiResponse({
    status: 200,
    description: 'Successfully deleted zookeeper',
  })
  deleteZookeeper(@Param('id') id: string): Promise<any> {
    return this.zookeeperService.deleteZookeeper(id);
  }
}
