import AnimalService from "../services/animals.service.js";

export default class animalController {
    static async getAllanimals(req, res) {
        const id = req.params.id;
        try {
            if (id) {
                const animal = await AnimalService.getAnimalById(id)
                res.status(200).send(animal);
            }
            else {
                const animals = await AnimalService.getAllAnimals();
                res.status(200).send(animals);
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }
    // static async getAnimalsByLocation(req, res) {
    //     try {
    //         const animals = await AnimalService.getAnimalsByLocation(req.query.location)
    //         res.status(200).send(animals)
    //     } catch (error) {
    //         res.status(500).send(error);
    //     }
    // }
    static async addAnimal(req, res) {
        try {
            const animal = await AnimalService.addNewAnimal(req.body);
            res.status(200).send(animal);
        } catch (error) {
            res.status(500).send(error);
        }
    }
    static async updateAnimal(req, res) {
        try {
            const updatedAnimal = await AnimalService.updateAnimal(req.params.id, req.body);
            res.status(200).send(updatedAnimal);
        } catch (error) {
            res.status(500).send(error);

        }
    }
    static async deleteAnimal(req, res) {
        try {
            await AnimalService.deleteAnimal(req.params.id);
            res.sendStatus(200);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}