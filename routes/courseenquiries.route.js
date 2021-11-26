const express = require('express');
const router = express.Router();
const courseEnquiryController = require('../controller/courseenquiry.controller');

//CourseEnquiry
router.post('/', courseEnquiryController.addCourseEnquiry);
router.get('/', courseEnquiryController.findCourseEnquirys);
router.get('/:id', courseEnquiryController.findCourseEnquiryById);
router.put('/:id', courseEnquiryController.updateCourseEnquiry);
router.delete('/:id', courseEnquiryController.deleteById);


//Resourse

module.exports = router;
