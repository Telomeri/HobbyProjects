import entries from '../../data/5x5data';
import { TrainingEntry, newTrainingEntry } from '../types';


const getEntries = (): Array<TrainingEntry> => {
  return entries;
  };


const addEntry = ( entry: newTrainingEntry):TrainingEntry => {
  const newTrainingEntry = {
    id: Math.max(...entries.map(e => e.id)) + 1,
    ...entry
  };
    entries.push(newTrainingEntry);
    return newTrainingEntry;
  };

const findById = (id: number): TrainingEntry | undefined => {
  const entry = entries.find(e => e.id === id);
  return entry;
  };

export default { getEntries, addEntry, findById };