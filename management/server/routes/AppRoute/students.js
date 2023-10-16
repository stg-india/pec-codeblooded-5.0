const express = require('express');
const router = express.Router();
const {getStudents , createStudent , deleteStudent} = require("../../controllers/app/Students");

router.post('/create-student', createStudent);
router.get('/get-students', getStudents);
router.post('/delete-student', deleteStudent);

module.exports = router;