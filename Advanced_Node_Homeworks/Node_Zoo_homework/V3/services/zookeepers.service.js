import Zookeeper from "../models/zookeepers.models.js";
import AnimalService from "./animals.service.js";


export default class ZookeeperService {
    static async getAllZookeepers() {
        const zooKeepers = await Zookeeper.find({})

        return zooKeepers;
    }
    static async getZookeepersbyId(zooKeeperId) {
        const zooKeeper = await Zookeeper.findById(zooKeeperId).populate("animals")

        return zooKeeper
    }

    static async addNewZookeeper(zookeeperData) {
        const zooKeeper = new Zookeeper(zookeeperData);
        const response = await zooKeeper.save()

        return response;
    }

    static async updateZookeeper(zooKeeperId, updateData) {
        const zooKeeper = await Zookeeper.findById(zooKeeperId);

        if (!zooKeeper) throw new Error(`Zookeeper with ID:${zooKeeperId} doesn't exist!`)

        const keys = Object.keys(updateData);

        keys.forEach(key => {
            if (key !== '_id' && key !== '__v') {
                zooKeeper[key] = updateData[key]
            }
        })

        const updatedZookeeper = await zooKeeper.save();

        return updatedZookeeper;
    }

    static async deleteZookeeper(zooKeeperId) {
        await Zookeeper.findByIdAndDelete(zooKeeperId);
    }
    static async updateAnimals(zooKeeperId, animalIds) {
        const zooKeeper = await Zookeeper.findById(zooKeeperId)

        if (!zooKeeper) throw new Error(`zooKeeper with id:${zooKeeperId} doesn't exist`)

        zooKeeper.animals = animalIds

        for (const animalId of animalIds) {
            await AnimalService.updateAnimal(animalId, { zooKeeper: zooKeeperId })
        }
        await zooKeeper.save()

        return zooKeeper
    }
}