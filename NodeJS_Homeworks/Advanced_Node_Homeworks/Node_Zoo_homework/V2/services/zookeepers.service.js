import Zookeeper from "../models/zookeepers.models.js";

export default class ZookeeperService {
    static async getAllZookeepers() {
        const zookeepers = await Zookeeper.find({})

        return zookeepers;
    }

    static async addNewZookeeper(zookeeperData) {
        const zookeeper = new Zookeeper(zookeeperData);
        const response = await zookeeper.save()

        return response;
    }

    static async updateZookeeper(zookeeperId, updateData) {
        const zookeeper = await Zookeeper.findById(zookeeperId);

        if (!zookeeper) throw new Error(`Zookeeper with ID:${zookeeperId} doesn't exist!`)

        const keys = Object.keys(updateData);

        keys.forEach(key => {
            if (key !== '_id' && key !== '__v') {
                zookeeper[key] = updateData[key]
            }
        })

        const updatedZookeeper = await zookeeper.save();

        return updatedZookeeper;
    }

    static async deleteZookeeper(zookeeperId) {
        await Zookeeper.findByIdAndDelete(zookeeperId);
    }
}