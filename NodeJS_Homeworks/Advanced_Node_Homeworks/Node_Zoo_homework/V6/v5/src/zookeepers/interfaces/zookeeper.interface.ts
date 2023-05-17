enum Gender {
  M = 'Male',
  F = 'Female',
}

export interface Zookeeper {
  id: string;
  name: string;
  age: number;
  gender: Gender;
  location: string;
  isActive: boolean;
  // animals: any[];
}
