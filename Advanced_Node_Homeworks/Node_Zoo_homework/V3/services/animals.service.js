import Animal from "../models/animals.models.js";

export default class AnimalService {
    static async getAllAnimals() {
        const animals = await Animal.find({})

        return animals;
    }
    static async getAnimalById(animalId) {
        const animal = await Animal.findById(animalId).populate("zookeepers", "-animals")

        return animal
    }

    static async addNewAnimal(animalData) {
        const animal = new Animal(animalData);
        const response = await animal.save()

        return response;
    }

    static async updateAnimal(animalId, updateData) {
        const animal = await Animal.findById(animalId);

        if (!animal) throw new Error(`Animal with ID:${animalId} doesn't exist!`)

        const keys = Object.keys(updateData);

        keys.forEach(key => {
            if (key !== '_id' && key !== '__v') {
                animal[key] = updateData[key]
            }
        })

        const updatedAnimal = await animal.save();

        return updatedAnimal;
    }

    static async deleteAnimal(animalId) {
        await Animal.findByIdAndDelete(animalId);
    }
}