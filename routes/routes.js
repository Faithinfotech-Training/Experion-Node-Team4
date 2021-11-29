const express = require('express');
const router = express.Router();
const courseRoutes = require('./courses.route');
const courseEnquiryRoutes = require('./courseenquiries.route');
const resourceRoutes = require('./resources.route');


router.use('/courses', courseRoutes);
router.use('/resources', resourceRoutes);
router.use('course-enquiries', courseEnquiryRoutes);


module.exports = router;