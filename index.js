const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const Train = require('C:/Users/user/Desktop/Railway/models/Train.js'); // Ensure this path is correct


const app = express();


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Serve static files
app.use(express.static(path.join(__dirname, 'public')));


// Search trains endpoint
app.get('/trains', async (req, res) => {
    try {
        const { source, destination } = req.query;


        if (!source || !destination) {
            return res.status(400).json({ message: 'Source and destination are required' });
        }


        const trains = await Train.find({ source, destination });
        res.json(trains);
    } catch (error) {
        console.error('Error fetching trains:', error);
        res.status(500).json({ message: 'Failed to fetch trains' });
    }
});


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});