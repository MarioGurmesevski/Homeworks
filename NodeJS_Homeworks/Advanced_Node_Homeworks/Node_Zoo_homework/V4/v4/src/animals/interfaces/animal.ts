export interface Animal {
  id: string;
  name: string;
  age: number;
  location: string;
  gender: Gender;
  characteristics: {
    food: string[];
    colour: string;
    isDangerous: boolean;
    weight: number;
    enclosure: string;
  };
}

export enum Gender {
  M = 'Male',
  F = 'Female',
}
