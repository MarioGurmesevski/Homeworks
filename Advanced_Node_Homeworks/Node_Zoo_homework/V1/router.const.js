import express from "express";
import animalRouter from "./routes/animals.routes.js"
import zookeeperRouter from "./routes/zookeepers.routes.js"

const router = express.Router();

router.use("/zookeepers", zookeeperRouter);
router.use("/animal", animalRouter)

export default router;