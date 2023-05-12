/*
https://docs.nestjs.com/providers#services
*/

import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, ILike, MoreThanOrEqual } from 'typeorm';

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
    @InjectRepository(Animal)
    private readonly animalRepository: Repository<Animal>,
  ) {}

  createAnimal(body: AnimalCreateDto): Promise<AnimalResponseDto> {
    return this.animalRepository.save(body);
  }

  getAnimals(query: animalQueryDto): Promise<AnimalResponseDto[]> {
    let whereQuery = {};

    if (query?.location) {
      whereQuery = { ...whereQuery, location: ILike(`%${query.location}%`) };
    }
    if (query?.age) {
      whereQuery = { ...whereQuery, age: MoreThanOrEqual(query.age) };
    }
    if (query?.gender) {
      whereQuery = { ...whereQuery, gender: query.gender };
    }

    return this.animalRepository.find({
      where: whereQuery,
      relations: ['zookeeper'],
    });
  }

  getAnimalById(id: string): Promise<AnimalResponseDto> {
    return this.animalRepository.findOne({
      where: { id },
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

  async addAnimalToZookeeper(animalId: string, zookeeperId: string) {
    const animal = await this.getAnimalById(animalId);

    const alreadyAddToZookeeper = animal?.zookeeperId === zookeeperId;

    if (alreadyAddToZookeeper) {
      throw new BadRequestException(
        `Animal with ID: ${animalId} is already add to Zookeeper.`,
      );
    }

    await this.animalRepository.save({
      id: animalId,
      zookeeperId,
    });

    return this.getAnimalById(animalId);
  }
}
