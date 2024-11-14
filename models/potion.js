const mongoose = require('mongoose');

const potionSchema = new mongoose.Schema({
  name: String,
  effect: String
});

module.exports = mongoose.model('Potion', potionSchema);
