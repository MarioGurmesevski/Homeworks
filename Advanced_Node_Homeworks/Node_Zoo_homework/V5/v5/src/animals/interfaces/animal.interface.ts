enum Gender {
  M = 'Male',
  F = 'Female',
}

export interface Characteristics {
  food: string[];
  colour: string;
  isDangerous: boolean;
  weight: number;
  enclosure: string;
}

export interface Animal {
  id: string;
  name: string;
  age: number;
  location: string;
  gender: Gender;
  zookeeperID?: string;
  characteristics: Characteristics;
}
