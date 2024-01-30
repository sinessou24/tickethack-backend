var express = require('express');
var router = express.Router();

const Booking = require('../models/booking');

router.post('/', (req, res) => {
    const {departure, arrival, date, price} = req.body
	const newBooking = new Booking({
    departure: departure,
    arrival:arrival,
    date:date,
    price:price,
  });

  newBooking.save().then(Booking => {
    res.json({ result: true, Trips: Booking });
    }); 
});


router.get('/', (req, res) => {
	Booking.find().then(data => {
    if(data) {
        res.json({ result:true, trips: data });
    } else {
        res.json({ result:false, error: "No trip booked" });
    }
	});
});


module.exports = router;