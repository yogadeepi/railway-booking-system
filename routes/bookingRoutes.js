const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking'); // Adjust path as needed


// Handle POST request to /book
router.post('/', async (req, res) => {
    try {
        const booking = new Booking(req.body);
        await booking.save();
        res.status(201).json(booking);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


module.exports = router;