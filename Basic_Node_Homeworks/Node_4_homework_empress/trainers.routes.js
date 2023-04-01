import express from 'express';
import * as trainerService from './trainers.service.js';

const router = express.Router();

router.get('/', trainerService.getAllTrainers);
router.get('/:id', trainerService.getTrainerById);
router.post('/', trainerService.createTrainer);
router.delete('/:id', trainerService.deleteTrainer);
router.delete('/', trainerService.deleteAllTrainers);

export default router;
