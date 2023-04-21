import { ZookeepersModule } from './zookeepers/zookeepers.module';
import { AnimalsModule } from './animals/animals.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    ZookeepersModule,
    AnimalsModule,
    ConfigModule.forRoot(),
    LoggerModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
