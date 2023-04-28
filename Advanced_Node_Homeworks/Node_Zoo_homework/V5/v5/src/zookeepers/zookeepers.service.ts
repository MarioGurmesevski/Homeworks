/*
https://docs.nestjs.com/providers#services
*/

import { Repository, DeleteResult } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { Zookeeper } from './zookeeper.entity';
import {
  ZookeeperCreateDto,
  ZookeeperResponseDto,
  ZookeeperUpdateDto,
} from './dtos/zookeeper.dto';

@Injectable()
export class ZookeepersService {
  constructor(
    @Inject('ZOOKEEPER_REPOSITORY')
    private zookeeperRepository: Repository<Zookeeper>,
  ) {}
  createZookeeper(body: ZookeeperCreateDto): Promise<ZookeeperResponseDto> {
    return this.zookeeperRepository.save(body);
  }
  getZookeepers(): Promise<ZookeeperResponseDto[]> {
    return this.zookeeperRepository.find({ relations: ['animals'] });
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
