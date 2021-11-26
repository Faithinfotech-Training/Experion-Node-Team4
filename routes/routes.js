const express = require('express');
const router = express.Router();
const courseRoutes = require('./courses.route');
const courseEnquiryRoutes = require('./courseenquiries.route')


router.use('/courses', courseRoutes);


module.exports = router;