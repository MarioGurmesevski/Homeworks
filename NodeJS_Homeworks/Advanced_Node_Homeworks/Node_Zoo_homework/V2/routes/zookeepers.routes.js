import { Router } from "express";
import zooKeeperController from "../controllers/zookeepers.controller.js";

const router = Router();

router.get("/", zooKeeperController.getAllzooKeepers);
router.post("/", zooKeeperController.addzooKeeper);
router.put("/:id", zooKeeperController.updatezooKeeper);
router.delete("/:id", zooKeeperController.deletezooKeeper)



export default router;