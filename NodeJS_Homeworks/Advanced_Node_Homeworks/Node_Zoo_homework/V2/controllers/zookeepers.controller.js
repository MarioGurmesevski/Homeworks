import ZookeeperService from "../services/zookeepers.service.js";

export default class zooKeeperController {
    static async getAllzooKeepers(req, res) {
        try {
            const zooKeepers = await ZookeeperService.getAllZookeepers();
            res.status(200).send(zooKeepers);
        } catch (error) {
            res.status(500).send(error);
        }
    }
    static async addzooKeeper(req, res) {
        try {
            const zooKeeper = await ZookeeperService.addNewZookeeper(req.body);
            res.status(200).send(zooKeeper);
        } catch (error) {
            res.status(500).send(error);
        }
    }
    static async updatezooKeeper(req, res) {
        try {
            const updatedzooKeeper = await ZookeeperService.updateZookeeper(req.params.id, req.body);
            res.status(200).send(updatedzooKeeper);
        } catch (error) {
            res.status(500).send(error);

        }
    }
    static async deletezooKeeper(req, res) {
        try {
            await ZookeeperService.deleteZookeeper(req.params.id);
            res.sendStatus(200);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}