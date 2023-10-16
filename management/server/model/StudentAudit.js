const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentAudit = new Schema(
  {
    version: {
        type: String
    },
    message: {
      type: String,
    },
    stuId: {
        type: mongoose.Types.ObjectId,
        ref: "Student",
    },
    techStaff: {
      type: mongoose.Types.ObjectId,
      ref: "TechStaff",
    },
    parentAuditId:{
        type:String,
    },
    method:{
        type:String,
    },
    createdBy:{
      type:String,
    },
    oldState:{},
    newState:{}
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("StudentAudit", StudentAudit);