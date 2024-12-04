const mongoose = require('mongoose');

const PotionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    effect: { type: String, required: true },
    potency: {
        type: Number,
        required: [true, 'Potency is required.'],
        min: [9, 'The potency number must be at least 9.'],
        max: [100, 'The potency number must be at most 100.']
    }
});

module.exports = mongoose.model('Potion', PotionSchema);
