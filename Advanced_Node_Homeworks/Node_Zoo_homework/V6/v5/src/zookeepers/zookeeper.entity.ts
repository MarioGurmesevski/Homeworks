import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';

import { Animal } from '../animals/animal.entity';

enum Gender {
  M = 'Male',
  F = 'Female',
}
@Entity()
export class Zookeeper {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('int')
  age: number;

  @Column({ type: 'enum', enum: Gender })
  gender: Gender;

  @Column()
  location: string;

  @Column()
  isActive: boolean;

  @OneToMany(() => Animal, (animals) => animals.zookeeper)
  animals: Animal[];
}
