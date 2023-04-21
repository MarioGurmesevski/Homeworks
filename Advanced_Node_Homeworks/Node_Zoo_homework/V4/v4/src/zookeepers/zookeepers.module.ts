import { ZookeepersService } from './zookeepers.service';
import { ZookeepersController } from './zookeepers.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ZookeepersController],
  providers: [ZookeepersService],
})
export class ZookeepersModule {}
