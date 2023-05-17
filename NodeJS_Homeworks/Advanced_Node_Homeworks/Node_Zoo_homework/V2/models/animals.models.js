import { Schema, model } from "mongoose";

const animalSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  age: {
    type: Number,
    required: true,
    min: 0,
  },
  location: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["M", "F"],
  },
  characteristics: {
    food: {
      type: [String],
    },
    colour: {
      type: String,
    },
    isDangerous: {
      type: Boolean,
      default: false,
    },
    weight: {
      type: Number,
      min: 0,
    },
    enclosure: {
      type: String,
      required: true,
    },
  },
});

const Animal = model("Animal", animalSchema);

export default Animal;

// "name": "Blacky",
// "type": "Bear",
// "age": 3,
// "location": "Belgrade",
// "gender": "M",
// "characteristics": {
//   "food": ["honey", "apple", "watermelon", "cucumber"],
//   "colour": "black",
//   "isDangerous": true,
//   "weight": 250,
//   "enclosure": "mountain"
