import { newTrainingEntry, Variation, Excercise } from "../types";

//there has to be a better way to exctract these values from existing type
const variations = ['day1','day2'];
const excercises = ["squat","bench","press","row","deadlift"];

//I don't like this, going to see if there is a better option out there.
//Accepts way too many options.
const checkDate = (val:string): string => {
    //We allow only OFFICAL dates >:()
    if (!Date.parse(val)) {
        throw new Error('Incorrect date or format' + val);
    }
    return val;
};

//check if included in variations
const checkVariation = (val:Variation): Variation => {
    if (!variations.includes(val)) {
        throw new Error('Incorrect variation given' + val);
    }
    return val;
};

const checkExcercises = (val:Array<Excercise>): Array<Excercise>=> {
    //check that we are given an array and its len atleast 1
    if (!Array.isArray(val) || val.length < 1) {
        throw new Error('Incorrect Excercises given (if only one wrap it in array)');
    }
    let correct_index = 0;
    val.forEach(excerc => {
        excercises.forEach(ex_name => {
        if(Object.keys(excerc)[0] == ex_name && typeof Object.values(excerc)[0] == 'number'){
            correct_index += 1;
            }
        });
    });
    if (val.length != correct_index) {
        throw new Error('Incorrect Excercises given (if only one wrap it in array)');
        }
    return val;
};

//checker go brr
const checkTrainingEntry = (object: newTrainingEntry): newTrainingEntry=> {
  return {
    date: checkDate(object.date),
    variation: checkVariation(object.variation),
    excercises: checkExcercises(object.excercises),
    extra: object.extra
  };
};

export default checkTrainingEntry;