var Potion = require('../models/potion'); // Import the Potion model

// List all potions
exports.potion_list = async function (req, res) {
    try {
        // Fetch all potions from the database
        const allPotions = await Potion.find();

        // Render the list of potions
        res.render('potion', { title: 'Potion Search Results', results: allPotions });
    } catch (err) {
        // Return status 500 with the error message
        res.status(500).json({ error: err.message });
    }
};

// For a specific potion
exports.potion_detail = async function (req, res) {
    try {
        // Find the potion by id
        const potion = await Potion.findById(req.params.id);

        if (!potion) {
            return res.status(404).json({ error: 'Potion not found' });
        }

        // Send the potion details as a JSON response
        res.json(potion);
    } catch (err) {
        // Return status 500 with the error message
        res.status(500).json({ error: err.message });
    }
};

// Handle potion creation on POST
exports.potion_create_post = async function (req, res) {
    try {
        // Create a new potion using the data in the request body
        const newPotion = new Potion({
            name: req.body.name,
            effect: req.body.effect,
            potency: req.body.potency
        });

        // Save the new potion to the database
        await newPotion.save();

        // Send the newly created potion as a JSON response
        res.status(201).json(newPotion);
    } catch (err) {
        // Return status 400 with the validation error message
        if (err.name === 'ValidationError') {
            return res.status(400).json({ error: 'Potency must be at least 9 and at most 100.' });
        } else {
            res.status(400).json({ error: err.message });
        }
    }
};

// Handle potion deletion on DELETE
exports.potion_delete = async function (req, res) {
    try {
        const result = await Potion.findByIdAndDelete(req.params.id);

        if (!result) {
            return res.status(404).json({ error: 'Potion not found' });
        }

        res.json(result);
    } catch (err) {
        // Return status 500 with the error message
        res.status(500).json({ error: err.message });
    }
};

// Handle potion update on PUT
exports.potion_update_put = async function (req, res) {
    try {
        // Validate input against schema
        const updateFields = {
            name: req.body.name,
            effect: req.body.effect,
            potency: req.body.potency
        };

        // Update the potion and validate using schema rules
        const updatedPotion = await Potion.findByIdAndUpdate(
            req.params.id,
            updateFields,
            { new: true, runValidators: true } // Ensure schema validation
        );

        if (!updatedPotion) {
            return res.status(404).json({ error: 'Potion not found' });
        }

        // Send the updated potion as a JSON response
        res.status(200).json({
            message: 'Potion updated successfully!',
            potion: updatedPotion
        });
    } catch (err) {
        // Return status 400 with the validation error message
        if (err.name === 'ValidationError') {
            return res.status(400).json({ error: 'Potency must be at least 9 and at most 100.' });
        } else {
            res.status(400).json({ error: err.message });
        }
    }
};
