import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from "url";
import trainersRouter from './trainers.routes.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express("");
const HOSTNAME = 'localhost';
const PORT = 3000;
app.use(express.json());

app.use('/api/trainers', trainersRouter);

app.get('/home', (req, res) => {
    const indexPath = path.join(__dirname, 'public', 'index.html');
    const indexFile = fs.readFileSync(indexPath);
    res.setHeader('Content-Type', 'text/html');
    res.send(indexFile);
});

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server listening at http://${HOSTNAME}:${PORT}/`);
});
