const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Registration = new Schema({
    handle: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    contestID: {
        type: Number,
        required: true
    }
});

module.exports= mongoose.model("Registration", Registration)