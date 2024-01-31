var express = require('express');
var router = express.Router();
var moment = require('moment')

const Trip = require('../models/trip');

//Pour afficher voyage dans le panier (addTrip):
router.post('/', (req, res) => {
	Trip.find({
    departure: { $regex: new RegExp(req.body.departure, 'i') },
    arrival:{ $regex: new RegExp(req.body.arrival, 'i') },
    date:{ $gte: new Date(moment(req.body.date).startOf('day').utc(+1)), $lte: new Date(moment(req.body.date).endOf('day').utc(+1)) } ,
  }).then(data => {
    if(data.length!=0) {
        res.json({ result:true, trips: data });
    } else {
        res.json({ result:false, error: "Trip unavailable" });
    }
	});
});

module.exports = router;