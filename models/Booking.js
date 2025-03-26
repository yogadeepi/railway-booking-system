const mongoose = require('mongoose');


// Define the schema for the booking
const bookingSchema = new mongoose.Schema({
    trainId: {
        type: String,
        required: true,
    },
    passengerName: {
        type: String,
        required: true,
    },
    dateOfJourney: {
        type: Date,
        required: true,
    },
    seatNumber: {
        type: String,
        required: true,
    },
});


// Create a model from the schema
const Booking = mongoose.model('Booking', bookingSchema);


module.exports = Booking;


