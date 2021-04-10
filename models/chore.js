const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const choreSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    timeToComplete: {
        type: Number,
        required: false,
    },
    value: {
        type: Number,
        required: false,
    }
});

const Chore = mongoose.model("Chore", choreSchema);

module.exports = Chore;