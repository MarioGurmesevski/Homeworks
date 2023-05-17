import { DatabaseModule } from '../database/database.module';
import { ZookeepersController } from './zookeepers.controller';
import { zookeeperProvider } from './zookeepers.providers';
import { ZookeepersService } from './zookeepers.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  controllers: [ZookeepersController],
  providers: [...zookeeperProvider, ZookeepersService],
})
export class ZookeepersModule {}
