import { ZookeepersModule } from './zookeepers/zookeepers.module';
import { AnimalsModule } from './animals/animals.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ZookeepersModule, AnimalsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
