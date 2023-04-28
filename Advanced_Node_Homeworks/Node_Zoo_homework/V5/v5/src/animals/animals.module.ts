import { AnimalsService } from './animals.service';
import { AnimalsController } from './animals.controller';
import { DatabaseModule } from 'src/database/database.module';
import { Module } from '@nestjs/common';
import { animalProvider } from './animals.providers';
/*
https://docs.nestjs.com/modules
*/

@Module({
  imports: [DatabaseModule],
  controllers: [AnimalsController],
  providers: [...animalProvider, AnimalsService],
})
export class AnimalsModule {}
