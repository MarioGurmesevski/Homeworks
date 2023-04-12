import { Router } from "express";
import animalController from "../controllers/animals.controller.js";

const router = Router();

router.get("/:id?", animalController.getAllanimals);
// router.get("/location", animalController.getAnimalsByLocation)
router.post("/", animalController.addAnimal);
router.put("/:id", animalController.updateAnimal);
router.delete("/:id", animalController.deleteAnimal)



export default router;