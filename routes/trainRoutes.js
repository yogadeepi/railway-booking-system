const express = require('express');
const router = express.Router();
const Train = require('C:/Users/user/Desktop/Railway/models/Train.js'); // Adjust the path to your Train model


// Route to search trains
router.get('/search', async (req, res) => {
    const { date } = req.query;
    try {
        // Adjust the search logic as needed
        const trains = await Train.find({ dateOfJourney: new Date(date) });
        res.json(trains);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch trains' });
    }
});


module.exports = router;