import { getDb } from "../db/mongo-connection.js"
import { ObjectId } from "mongodb";

export default class animalModel {
    static async getAllanimalsModel() {
        const collection = await getDb().collection("animals");
        const animals = await collection.find().toArray();
        return animals;
    }
    static async addAnimal(animal) {
        const collection = await getDb().collection("animals");
        const createdAnimal = await collection.insertOne(animal);
        return { id: createdAnimal.insertedId, ...animal };
    }
    static async updateAnimal(animalId, body) {
        const collection = await getDb().collection("animals");
        const result = await collection.updateOne({ _id: new ObjectId(animalId) }, { $set: body });
        return result;
    }
    static async deleteAnimal(animalId) {
        const collection = await getDb().collection("animals");
        const deleteresponse = await collection.deleteOne({ _id: new ObjectId(animalId) });
        console.log(deleteresponse);
    }
}
