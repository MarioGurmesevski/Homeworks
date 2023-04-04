import express from "express";
import animalController from "../controllers/animals.controller.js";
import animalValidator from "../middleware/animals-validator.middleware.js"

const router = express.Router();

router.get("/", animalController.getAllanimals);
router.post("/", animalValidator, animalController.addAnimal);
router.put("/:id", animalValidator, animalController.updateAnimal);
router.delete("/:id", animalController.deleteAnimal)



export default router;