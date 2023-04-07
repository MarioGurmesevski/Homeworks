import { Schema, model } from "mongoose";

const characteristics = new Schema({
  _id: false,
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
})

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
  zookeepers: {
    type: Schema.Types.ObjectId,
    ref: "Zookeeper"
  },
  characteristics: {
    type: characteristics,
    required: true
  }
});

const Animal = model("Animal", animalSchema);

export default Animal;
