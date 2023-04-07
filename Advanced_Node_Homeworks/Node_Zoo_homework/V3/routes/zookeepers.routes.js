import { Router } from "express";
import zooKeeperController from "../controllers/zookeepers.controller.js";

const router = Router();

router.get("/:id?", zooKeeperController.getAllzooKeepers);
router.post("/", zooKeeperController.addzooKeeper);
router.put("/:id", zooKeeperController.updatezooKeeper);
router.delete("/:id", zooKeeperController.deletezooKeeper)
router.patch("/:id/animals", zooKeeperController.updateAnimals)



export default router;