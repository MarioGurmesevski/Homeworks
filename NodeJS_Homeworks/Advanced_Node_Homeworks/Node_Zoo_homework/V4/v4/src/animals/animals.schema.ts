import { Schema } from 'mongoose';
import { Gender } from './interfaces/animal';
import { ObjectId } from 'mongoose';

export const animalSchema = new Schema({
  id: String,
  name: String,
  age: Number,
  location: String,
  gender: {
    type: String,
    enum: Object.keys(Gender),
  },

  characteristics: {
    food: [String],
    colour: String,
    isDangerous: Boolean,
    weight: Number,
    enclosure: String,
  },
});
