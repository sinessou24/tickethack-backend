var express = require('express');
var router = express.Router();

const Cart = require('../models/cart');

//Pour afficher voyage dans le panier (addTrip):
router.post('/', (req, res) => {
    const {departure, arrival, date, price} = req.body
	const newCart = new Cart({
    departure: departure,
    arrival:arrival,
    date:date,
    price:price,
    isValaible: true,
  });

  newCart.save().then(Cart => {
    res.json({ result: true, Trips: Cart });
    }); 
});


router.get('/', (req, res) => {
	Cart.find().then(data => {
    if(data) {
        res.json({ result:true, trips: data });
    } else {
        res.json({ result:false, error: "No trip booked" });
    }
	});
});

router.delete("/:id", (req, res) => {
    const {id} = req.params;
    Cart.updateOne({ _id: id }, {isValable: false}).then(data => {
    res.json({cart: data });
    })
  });

module.exports = router;