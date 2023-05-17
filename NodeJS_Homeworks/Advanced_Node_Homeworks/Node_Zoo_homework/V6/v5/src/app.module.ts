import { Module } from '@nestjs/common';

import { ZookeepersModule } from './zookeepers/zookeepers.module';
import { AnimalsModule } from './animals/animals.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ZookeepersModule, AnimalsModule, DatabaseModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
