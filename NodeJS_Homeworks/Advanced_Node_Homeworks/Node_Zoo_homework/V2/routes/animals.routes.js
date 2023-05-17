import { Router } from "express";
import animalController from "../controllers/animals.controller.js";

const router = Router();

router.get("/", animalController.getAllanimals);
router.post("/", animalController.addAnimal);
router.put("/:id", animalController.updateAnimal);
router.delete("/:id", animalController.deleteAnimal)



export default router;