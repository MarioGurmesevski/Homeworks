import { AnimalsService } from './animals.service';
import { AnimalsController } from './animals.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AnimalsController],
  providers: [AnimalsService],
})
export class AnimalsModule {}
