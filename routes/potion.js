var express = require('express');
const potion_controller = require('../controllers/potion');
const detail_controller = require('../controllers/detailController');
var router = express.Router();

// Middleware to secure routes
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.redirect('/login');
};

// GET request to fetch all potions
router.get('/', potion_controller.potion_list);

// POST request to create a new potion
router.post('/potions', potion_controller.potion_create_post);

// PUT request to update an existing potion
router.put('/potions/:id', potion_controller.potion_update_put);

// Routes for detail controller views
router.get('/detail', secured,detail_controller.potion_view_one_Page);
router.get('/create', secured,detail_controller.potion_create_Page);
router.get('/update', secured, detail_controller.potion_update_Page);
router.get('/delete', secured, detail_controller.potion_delete_Page);

module.exports = router;