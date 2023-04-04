import animalModel from "../models/animals.models.js";

export default class zooKeeperController {
    static async getAllanimals(req, res) {
        try {
            const animals = await animalModel.getAllanimalsModel();
            res.status(200).send(animals);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: "Something went wrong" });
        }
    }
    static async addAnimal(req, res) {
        try {
            const animal = await animalModel.addAnimal(req.body);
            res.status(200).send(animal);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: "Something went wrong" });
        }
    }
    static async updateAnimal(req, res) {
        try {
            const updatedAnimal = await animalModel.updateAnimal(req.params.id, req.body);
            res.status(200).send(updatedAnimal);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: "Error while updating animal!" });

        }
    }
    static async deleteAnimal(req, res) {
        try {
            await animalModel.deleteAnimal(req.params.id);
            res.sendStatus(200);
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: "Error while deleting animal!" });
        }
    }
}