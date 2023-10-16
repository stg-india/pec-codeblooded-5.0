const express = require("express");
const Student = require("../../model/Student");
const Parent = require("../../model/Parent");
const StudentAudit = require("../../model/StudentAudit");

const createStudent = async (req, res) => {
  const data = req.body;
  if (
    !data.name ||
    !data.id ||
    !data.phoneNo ||
    !data.address ||
    !data.gender ||
    !data.age ||
    !data.depId ||
    !data.sem ||
    !data.year ||
    !data.branch ||
    !data.parentName ||
    !data.occupation ||
    !data.parentphone ||
    !data.parentAddress ||
    !data.parentGender
  )
    return res.status(404);

  const student = {
    name: data.name,
    id: data.id,
    phoneNo: data.phoneNo,
    address: data.address,
    gender: data.gender,
    branch: data.branch,
    age: data.age,
    depId: new Object(data.depId),
    sem: data.sem,
    year: data.year,
    CGPA: data.CGPA,
  };

  const parent = {
    name: data.parentName,
    occupation: data.occupation,
    phoneNo: data.parentphone,
    address: data.parentAddress,
    gender: data.parentGender,
  };
  const savedParent = await Parent.create(parent);
  const savedStudent = await Student.create(student);
    
  const studentAudit = {
    message: `Student ${savedStudent.name} has been Created`,
    stuId: savedStudent._id,
    parentAuditId: data.auditId,
    method: "Create",
    createdBy:req.query.email,
    oldState: {

    },
    newState: {
        student
    }
  }

    const savedStudentAudit = await StudentAudit.create(studentAudit)
    // console.log("saved : ",savedStudent);

    if (savedStudent && savedParent) {
        console.log("saved");
        return res.status(200).json({ message: savedStudent });
    } else {
        return res.status(404).json({ message: "error !" });
    }
};

const getStudents = async (req, res) => {
  const Students = await Student.find();
  return res.status(200).json({ message: Students });
};

const getStudent = async(req,res)=>{
    const data = req.body;
    console.log(data);
    const student = await Student.find({_id: data.id});
    console.log(student)
    const studentAudits = await StudentAudit.find({stuId: data.id}).sort({_id : 1});
    console.log(studentAudits);
    return res.status(200).json({data: student , audits : studentAudits});
}

const updateStudent = async (req,res)=>{
    const data = req.body;
    const createdStudent = await Student.updateOne({_id: data._id},{
        $set : {
            data
        }
    });
}

module.exports = {
    getStudents,
    createStudent,
    getStudent,
    updateStudent
}
