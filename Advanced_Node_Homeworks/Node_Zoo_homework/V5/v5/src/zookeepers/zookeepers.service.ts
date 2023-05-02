/*
https://docs.nestjs.com/providers#services
*/

import { Repository, DeleteResult, Like } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
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
    @Inject('ZOOKEEPER_REPOSITORY')
    private zookeeperRepository: Repository<Zookeeper>,
  ) {}
  createZookeeper(body: ZookeeperCreateDto): Promise<ZookeeperResponseDto> {
    return this.zookeeperRepository.save(body);
  }
  getZookeepers(query: zookeeperQueryDto): Promise<ZookeeperResponseDto[]> {
    let whereQuery = {};

    if (query?.location) {
      whereQuery = { ...whereQuery, location: Like(`%${query.location}%`) };
    }
    if (query?.age) {
      whereQuery = { ...whereQuery, age: query.age };
    }
    if (query?.isActive) {
      whereQuery = { ...whereQuery, gender: query.isActive };
    }

    return this.zookeeperRepository.find({
      where: whereQuery,
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
