//If you change these, check values in utils/checkTrainingEntry
export type Excercise = {"squat": number } | {"bench": number } | {"press": number } | {"row": number } | {"deadlift": number };
export type Variation = "day1" | "day2";

export interface TrainingEntry {
    id: number;
    date: string;
    variation: Variation;
    excercises: Array<Excercise>;
    extra?: string;
  }

export type newTrainingEntry = Omit<TrainingEntry, 'id'>;

//old definition for excercises:
/*    excercise1: Excercise;
    excercise2: Excercise;
    excercise3: Excercise;*/