const express = require('express');
const router = express.Router();

const {getCourses,createCourse} = require("../../controllers/app/Courses");

router.get('/get-courses',getCourses);
router.post('/create-course',createCourse);

module.exports = router;