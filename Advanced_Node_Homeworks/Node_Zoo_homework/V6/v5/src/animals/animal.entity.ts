import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';

import { Zookeeper } from '../zookeepers/zookeeper.entity';

enum Gender {
  M = 'Male',
  F = 'Female',
}
export class Characteristics {
  @Column('simple-array')
  food: string[];
  @Column()
  colour: string;
  @Column()
  isDangerous: boolean;
  @Column()
  weight: number;
  @Column()
  enclosure: string;
}

@Entity()
export class Animal {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('int')
  age: number;

  @Column()
  location: string;

  @Column({ type: 'enum', enum: Gender })
  gender: Gender;

  @Column(() => Characteristics)
  characteristics: Characteristics;

  @Column({
    nullable: true,
  })
  zookeeperId: string;

  @ManyToOne(() => Zookeeper, (zookeeper) => zookeeper.animals)
  zookeeper: Zookeeper;
}
