import { StarRating } from './star-rating.enum';

export interface Rooms {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  people: number;
  children: number;
  amenities: string[];
  isAvailable: boolean;
}
export interface Hotel {
  id: number;
  name: string;
  address: string;
  city: string;
  country: string;
  stars: StarRating;
  image: string;
  rooms: Rooms[];
}
