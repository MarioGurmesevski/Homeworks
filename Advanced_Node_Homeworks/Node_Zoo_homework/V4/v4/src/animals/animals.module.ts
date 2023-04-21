import { AnimalsService } from './animals.service';
import { AnimalsController } from './animals.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AnimalsController],
  providers: [AnimalsService],
})
export class AnimalsModule {}
