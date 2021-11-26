const express = require('express');
const router = express.Router();
const staffRoutes = require('./staffs.route');

router.use('/staffs', staffRoutes);
module.exports = router;