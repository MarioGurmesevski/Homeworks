import express from "express";
import zookeeperRouter from "./routes/zookeepers.routes.js";

const router = express.Router();

router.use("/zookeepers", zookeeperRouter);

export default router;