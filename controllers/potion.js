// controllers/potionController.js
var Potion = require('../models/potion');  // Import the Potion model

// List all potions
exports.potion_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Potion list');
};

// For a specific potion
exports.potion_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Potion detail: ' + req.params.id);
};

// Handle potion creation on POST
exports.potion_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Potion create POST');
};

// Handle potion deletion on DELETE
exports.potion_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Potion delete DELETE ' + req.params.id);
};

// Handle potion update on PUT
exports.potion_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Potion update PUT ' + req.params.id);
};