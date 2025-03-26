// models/train.js
const mongoose = require('mongoose');


const trainSchema = new mongoose.Schema({
    trainId: String,
    source: String,
    destination: String,
    departureTime: String // Format: 'HH:mm AM/PM'
});


const Train = mongoose.model('Train', trainSchema);


module.exports = Train;
