// routes/potion.js
var express = require('express');
var router = express.Router();

/* GET potion page. */
router.get('/', function(req, res, next) {
  res.render('potion', { title: 'Search Results for Potion' });
});

module.exports = router;
