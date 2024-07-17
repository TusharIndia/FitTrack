const mongoose = require('mongoose');
const { Schema } = mongoose;

const WorkoutSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user' 
    },
    exercises: [{
        name: String,
        b_part: String,
        sets: {
            type: Number,
            default: 0
        },
        reps: {
            type: Number,
            default: 0
        },
        calorie_burn: {
            type: Number,
            default: 0
        }
    }],
    date: {
        type: Date,
        default: () => new Date().toLocaleDateString('en-CA')
    }
});

module.exports = mongoose.model('Workout', WorkoutSchema);
