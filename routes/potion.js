var express = require('express');
const potion_controller = require('../controllers/potion');  // Changed from artifact_controller to potion_controller
var router = express.Router();
 
// GET request to fetch all potions
router.get('/', potion_controller.potion_list);
 
// POST request to create a new potion
router.post('/potions', potion_controller.potion_create_post);
 
module.exports = router;
