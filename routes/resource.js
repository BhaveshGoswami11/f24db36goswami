// routes/resource.js
const express = require('express');
const router = express.Router();

// Require controller modules
const api_controller = require('../controllers/api');
const potion_controller = require('../controllers/potion');  // Changed from relicController to potionController

/// API ROUTE ///

// GET request for API base
//router.get('/', api_controller.api);

// Potion Routes
router.get('/', potion_controller.potion_list); // GET request for list of all Potions
router.post('/', potion_controller.potion_create_post); // POST request for creating a Potion
router.get('/:id', potion_controller.potion_detail); // GET request for a specific Potion
router.put('/:id', potion_controller.potion_update_put); // PUT request to update a Potion
router.delete('/:id', potion_controller.potion_delete); // DELETE request to delete a Potion

module.exports = router;
