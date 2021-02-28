import React  from 'react';
import {TrainingEntry} from "../types";

const Workouts: React.FC<{trainingEntries: Array<TrainingEntry>}> = ({trainingEntries}) => {
    return (<div>{trainingEntries.map(entry => <Workout key ={entry.id} workout={entry}/>)}</div>)
};

const Workout: React.FC<{workout: TrainingEntry}> = ({workout}) => {
    return (<div>
        <p>Workout conducted in {workout.date} with variation {workout.variation}</p>
        <ul>{workout.excercises.map(excercise => (
            Object.keys(excercise).map((key, index) => (
                <li key={index}> {key} done with a weight of {excercise[key]}</li>
            ))
            ))}</ul>
        </div>
      )
  }

  export default Workouts