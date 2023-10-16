const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Student = new Schema(
  {
    name: {
      type: String,
    },
    id: {
      type: String,
    },
    phoneNo: {
      type: String,
    },
    address: {
      type: String,
    },
    gender: {
      type: String,
    },
    age: {
      type: String,
    },
    year: {
      type: String,
    },
    depId: {
      type: String,
      ref: "Department",
    },
    branch: {
      type: String,
    },
    sem: {
      type: String,
    },
    CGPA: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", Student);