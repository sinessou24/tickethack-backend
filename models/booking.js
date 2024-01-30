const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    id: Number,
	departure: String,
	arrival: String,
    date: Date,
    price: Number,
});

const Booking = mongoose.model('bookings', bookingSchema);

module.exports = Booking;