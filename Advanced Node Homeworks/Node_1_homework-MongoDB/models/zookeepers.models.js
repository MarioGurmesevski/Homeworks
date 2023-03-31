import { getDb } from "../db/mongo-connection.js"
import { ObjectId } from "mongodb";

export default class zooKeeperModel {
    static async getAllzooKeepersModel() {
        const collection = await getDb().collection("zookeepers");
        const zookeepers = await collection.find().toArray();
        return zookeepers;
    }
    static async addzooKeeper(zooKeeper) {
        const collection = await getDb().collection("zookeepers");
        const createdzooKeeper = await collection.insertOne(zooKeeper);
        return { id: createdzooKeeper.insertedId, ...zooKeeper };
    }
    static async updatezooKeeper(zooKeeperId, body) {
        const collection = await getDb().collection("zookeepers");
        const result = await collection.updateOne({ _id: new ObjectId(zooKeeperId) }, { $set: body });
        return result;
    }
    static async deletezooKeeper(zooKeeperId) {
        const collection = await getDb().collection("zookeepers");
        const deleteresponse = await collection.deleteOne({ _id: new ObjectId(zooKeeperId) });
        console.log(deleteresponse);
    }
}
