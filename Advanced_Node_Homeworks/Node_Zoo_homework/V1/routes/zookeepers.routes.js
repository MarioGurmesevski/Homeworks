import express from "express";
import zooKeeperController from "../controllers/zookeepers.controller.js";
import zooKeeperValidator from "../middleware/zookeepers-validator.middleware.js"

const router = express.Router();

router.get("/", zooKeeperController.getAllzooKeepers);
router.post("/", zooKeeperValidator, zooKeeperController.addzooKeeper);
router.put("/:id", zooKeeperValidator, zooKeeperController.updatezooKeeper);
router.delete("/:id", zooKeeperController.deletezooKeeper)



export default router;