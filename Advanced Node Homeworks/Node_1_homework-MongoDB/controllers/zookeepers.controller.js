import zooKeeperModel from "../models/zookeepers.models.js";

export default class zooKeeperController {
    static async getAllzooKeepers(req, res) {
        try {
            const zooKeepers = await zooKeeperModel.getAllzooKeepersModel();
            res.status(200).send(zooKeepers);
        } catch (error) {
            // console.log(error);
            res.status(500).send({ message: "Something went wrong" });
        }
    }
    static async addzooKeeper(req, res) {
        try {
            const zooKeeper = await zooKeeperModel.addzooKeeper(req.body);
            res.status(200).send(zooKeeper);
        } catch (error) {
            // console.log(error);
            res.status(500).send({ message: "Something went wrong" });
        }
    }
    static async updatezooKeeper(req, res) {
        try {
            const updatedzooKeeper = await zooKeeperModel.updatezooKeeper(req.params.id, req.body);
            res.status(200).send(updatedzooKeeper);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: "Error while updating zookeeper!" });

        }
    }
    static async deletezooKeeper(req, res) {
        try {
            await zooKeeperModel.deletezooKeeper(req.params.id);
            res.sendStatus(200);
        } catch (error) {
            // console.log(error);
            res.status(500).send({ message: "Error while deleting zookeeper!" });
        }
    }
}