/*
https://docs.nestjs.com/providers#services
*/

import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository, DeleteResult, ILike, MoreThanOrEqual } from 'typeorm';

import { Zookeeper } from './zookeeper.entity';
import {
  ZookeeperCreateDto,
  ZookeeperResponseDto,
  ZookeeperUpdateDto,
} from './dtos/zookeeper.dto';
import { zookeeperQueryDto } from './dtos/zookeeper-query.dto';

@Injectable()
export class ZookeepersService {
  constructor(
    @InjectRepository(Zookeeper)
    private readonly zookeeperRepository: Repository<Zookeeper>,
  ) {}

  createZookeeper(body: ZookeeperCreateDto): Promise<ZookeeperResponseDto> {
    return this.zookeeperRepository.save(body);
  }

  getZookeepers(query: zookeeperQueryDto): Promise<ZookeeperResponseDto[]> {
    let whereQuery = {};

    if (query?.location) {
      whereQuery = { ...whereQuery, location: ILike(`%${query.location}%`) };
    }
    if (query?.age) {
      whereQuery = { ...whereQuery, age: MoreThanOrEqual(query.age) };
    }
    if (query?.isActive) {
      whereQuery = { ...whereQuery, isActive: query.isActive };
    }

    return this.zookeeperRepository.find({
      where: whereQuery,
      relations: ['animals'],
    });
  }

  getZookeeperById(id: string): Promise<ZookeeperResponseDto> {
    return this.zookeeperRepository.findOne({
      where: { id },
      relations: ['animals'],
    });
  }

  async updateZookeeper(
    id: string,
    updateData: ZookeeperUpdateDto,
  ): Promise<ZookeeperResponseDto> {
    return this.zookeeperRepository.save({ ...updateData, id: id });
  }

  async deleteZookeeper(id: string): Promise<DeleteResult> {
    return await this.zookeeperRepository.delete(id);
  }
}
