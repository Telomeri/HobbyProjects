//type Excercise_Index = "squat" | "bench" | "press" | "row" | "deadlift";
//the val below is a bandaid
export type Excercise = {[key: string]: number}
export type Variation = "day1" | "day2";

export interface TrainingEntry{
    id: number;
    date: string;
    variation: Variation;
    excercises: Array<Excercise>;
    extra?: string;
  }

export type newTrainingEntry = Omit<TrainingEntry, 'id'>;
