import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

const TRAINERFILEPATH = './trainers.json';

export const getAllTrainers = (req, res) => {
    try {
        const trainers = JSON.parse(fs.readFileSync(TRAINERFILEPATH));
        res.status(200).json(trainers);
    } catch (error) {
        res.status(500).send(error.mess);
    }
};

export const getTrainerById = (req, res) => {
    try {
        const trainers = JSON.parse(fs.readFileSync(TRAINERFILEPATH));
        const trainer = trainers.find((t) => t.id === req.params.id);
        if (!trainer) {
            res.status(404).send(error.mess);
        } else {
            res.status(200).json(trainer);
        }
    } catch (error) {
        res.status(500).send(error.mess);
    }
};

export const createTrainer = (req, res) => {
    try {
        const trainers = JSON.parse(fs.readFileSync(TRAINERFILEPATH));
        const newTrainer = {
            id: uuidv4(),
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            isCurrentlyTeaching: req.body.isCurrentlyTeaching,
            timeEmployed: req.body.timeEmployed,
            coursesFinished: req.body.coursesFinished,
        };
        trainers.push(newTrainer);
        fs.writeFileSync(TRAINERFILEPATH, JSON.stringify(trainers));
        res.status(201).json(newTrainer);
    } catch (error) {
        res.status(500).send(error.mess);
    }
};

export const deleteTrainer = (req, res) => {
    try {
        const trainers = JSON.parse(fs.readFileSync(TRAINERFILEPATH));
        const trainerId = req.params.id;
        const filteredTrainers = trainers.filter((trainer) => trainer.id !== trainerId);
        if (filteredTrainers.length === trainers.length) {
            res.status(404).send(error.mess);
        } else {
            fs.writeFileSync(TRAINERFILEPATH, JSON.stringify(filteredTrainers));
            res.status(200).send('Trainer Deleted Successfully');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send(error.mess);
    }
};

export const deleteAllTrainers = (req, res) => {
    try {
        fs.writeFileSync(TRAINERFILEPATH, '[]');
        res.status(200).send('Every Trainer Was Deleted Successfully');
    } catch (error) {
        res.status(500).send(error.mess);
    }
};



//MISSING - updateTrainer,