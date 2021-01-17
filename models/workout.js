const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {type: Date, default: Date.now},
    exercises: [{
        type: {type: String, trim: true, requirerd:" Enter an excercise type"},
        name: { type: String, trim: true, required:"Enter a name for the excercise"},
        distance: {type: String, trim: true},
        duration: {type: Number, required: "Please add a valid whole number value" },
        weight: {type: Number, required: "Please add a valid whole number value" },
        reps: {type: Number, required: "Please add a valid whole number value" },
        sets: {type: Number, required: "Please add a valid whole number value" }
    }]
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout 