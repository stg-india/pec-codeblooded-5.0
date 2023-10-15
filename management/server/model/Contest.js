const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Contest = new Schema({
  owner: {
    type: String,
    required: true,
  },
  cfID: {
    type: Number,
    required: true,
  },
  contestID: {
    type: Number,
    required: true,
  },
  startTime: {
    type: Number,
    required: true,
  },
  global: {
    type: Boolean,
    default: true
  },
  allowedColleges: [String],
  prizeValue: {
    type: Number,
    required: true,
  },
  prizeDist: {
    type: String,
  },
  fees: {
    type: Number,
    required: true,
  },
  playerCount: {
    type: Number,
    required: true,
  },
})

module.exports= Mongoose.model("Contest", Contest)