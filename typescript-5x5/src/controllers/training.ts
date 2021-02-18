import express from 'express';
import trainingService from '../services/trainingService';
import checkTrainingEntry from '../utils/checkTrainingEntry';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(trainingService.getEntries());
});

router.post('/', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  //going to deal with this later (famous last words)
  const newEntry = checkTrainingEntry(req.body);
  const newTrainingEntry = trainingService.addEntry(newEntry);
  res.json(newTrainingEntry);
});

router.get('/:id', (req,res) => {
  const entry = trainingService.findById(Number(req.params.id));
  if (entry) {
    res.send(entry);
  }
  else {
    res.sendStatus(404);
  }
});

export default router;