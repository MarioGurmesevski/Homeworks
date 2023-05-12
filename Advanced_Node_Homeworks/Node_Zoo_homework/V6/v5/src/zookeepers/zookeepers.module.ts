/*
https://docs.nestjs.com/modules
*/
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { Zookeeper } from './zookeeper.entity';
import { ZookeepersController } from './zookeepers.controller';
import { ZookeepersService } from './zookeepers.service';

@Module({
  imports: [TypeOrmModule.forFeature([Zookeeper])],
  controllers: [ZookeepersController],
  providers: [ZookeepersService, JwtService],
})
export class ZookeepersModule {}
