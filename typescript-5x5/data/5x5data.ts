import { TrainingEntry } from "../src/types";

//going to move this to mongoDB later
const trainingEntries: Array<TrainingEntry> = 
[
    {
        "id": 1,
        "date": "2021-02-13",
        "variation": "day1",
        "excercises": [{"squat": 60 }, {"bench": 40 }, {"row": 35 }],
        "extra": "abs 20"
    },
    {
        "id": 2,
        "date": "2021-02-15",
        "variation": "day2",
        "excercises": [{"squat": 62.5 }, {"press": 35 },{"deadlift": 70 }],
        "extra": "running 5"
    }
];

export default trainingEntries;