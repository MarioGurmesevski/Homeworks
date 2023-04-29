/*
https://docs.nestjs.com/providers#services
*/

import { Repository, DeleteResult, Like } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { Animal } from './animal.entity';
import {
  AnimalCreateDto,
  AnimalResponseDto,
  AnimalUpdateDto,
} from './dtos/animal.dto';
import { animalQueryDto } from './dtos/animal-query.dto';
@Injectable()
export class AnimalsService {
  constructor(
    @Inject('ANIMAL_REPOSITORY')
    private animalRepository: Repository<Animal>,
  ) {}
  createAnimal(body: AnimalCreateDto): Promise<AnimalResponseDto> {
    return this.animalRepository.save(body);
  }

  getAnimals(query: animalQueryDto): Promise<AnimalResponseDto[]> {
    const locationQuery = query?.location
      ? { location: Like(`%${query.location}%`) }
      : {};

    const ageQuery = query?.age ? { age: Like(`%${query.age}%`) } : {};

    return this.animalRepository.find({
      where: { ...locationQuery, ...ageQuery },
      relations: ['zookeeper'],
    });
  }

  async updateAnimal(
    id: string,
    updateData: AnimalUpdateDto,
  ): Promise<AnimalResponseDto> {
    return this.animalRepository.save({ ...updateData, id: id });
  }
  async deleteAnimal(id: string): Promise<DeleteResult> {
    return await this.animalRepository.delete(id);
  }
}
