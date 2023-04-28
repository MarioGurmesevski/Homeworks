/*
https://docs.nestjs.com/providers#services
*/

import { Inject, Injectable } from '@nestjs/common';
import { Animal } from './interfaces/animal';
import { Model } from 'mongoose';
import { PinoLogger } from 'nestjs-pino';
import { AnimalCreateDto, AnimalResponseDto } from './dtos/animal.dto';

@Injectable()
export class AnimalsService {
  constructor(
    @Inject('ANIMAL_MODEL') private animalModel: Model<Animal>,
    private readonly logger: PinoLogger,
  ) {}
  getAnimals(): Promise<AnimalResponseDto[]> {
    this.logger.info('getAnimals called');
    return this.animalModel;
  }
}
