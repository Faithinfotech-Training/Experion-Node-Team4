const express = require('express');
const resourceController = require('../controller/resource.controller');
const router = express.Router();


router.post('/', resourceController.addResource); //whenever the post method is called it calls addgig from gig contoller
router.get('/', resourceController.findResources);  //similiarly 
router.get('/:id', resourceController.findResourceById);
router.put('/:id', resourceController.updateResource);
router.delete('/:id', resourceController.deleteById);

module.exports = router;

