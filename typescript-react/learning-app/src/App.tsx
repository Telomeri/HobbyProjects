import React, { useState, useEffect } from 'react';
import {TrainingEntry} from "./types";
import trainingAPI from "./services/trainingAPI";
import Workouts from "./components/Workouts"

const App = () => {

  //formatting all over the place, but good enough
  const [trainingData, setTrainingData] = useState<Array<TrainingEntry>| undefined>(undefined);

  useEffect(() => {
    trainingAPI.get_training_data().then(response => {
      setTrainingData(response)
  })}, []);
  
  if (trainingData) {
    return (
      <div>
        <Workouts trainingEntries={trainingData} />
      </div>
    )
  }
  else {
    return (<div>Fetching data...</div>)
  }
};

export default App;
