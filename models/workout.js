const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {type: Date, default: Date.now},
    excercises: [{
        type: {type: String, trim: true, requirerd:" Enter an excercise type"},
        name: { type: String, trim: true, requireD:"Enter a name for the excercise"},
        duration: {type: Number, required: "Please add a valid whole number value" },
        weight: {type: Number, required: "Please add a valid whole number value" },
        reps: {type: Number, required: "Please add a valid whole number value" },
        sets: {type: Number, required: "Please add a valid whole number value" }
    }]
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout 