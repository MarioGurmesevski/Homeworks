import { ZookeepersService } from './zookeepers.service';
import { ZookeepersController } from './zookeepers.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ZookeepersController],
  providers: [ZookeepersService],
})
export class ZookeepersModule {}
