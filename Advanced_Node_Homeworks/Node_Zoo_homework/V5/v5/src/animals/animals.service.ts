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
    let whereQuery = {};

    if (query?.location) {
      whereQuery = { ...whereQuery, location: Like(`%${query.location}%`) };
    }
    if (query?.age) {
      whereQuery = { ...whereQuery, age: query.age };
    }
    if (query?.gender) {
      whereQuery = { ...whereQuery, gender: query.gender };
    }

    return this.animalRepository.find({
      where: whereQuery,
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
