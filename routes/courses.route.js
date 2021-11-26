const express = require('express');
const router = express.Router();
const courseController = require('../controller/course.controller');

//Course
router.post('/', courseController.addCourse);
router.get('/', courseController.findCourses);
router.get('/:id', courseController.findCourseById);
router.put('/:id', courseController.updateCourse);
router.delete('/:id', courseController.deleteById);


//Resourse

module.exports = router;
