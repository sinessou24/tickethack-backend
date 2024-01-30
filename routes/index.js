var express = require('express');
var router = express.Router();

require('../models/connection')
const Trip = require('../models/trip');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Pour afficher voyage dans le panier (addTrip):
City.findOne({
  cityName: { $regex: new RegExp(req.params.cityName, "i") },
}).then(data => {
  if (data) {
    res.json({ result: true, weather: data });
  } else {
    res.json({ result: false, error: "City not found" });
  }
});


//envoyer trajet (viewTrips):
router.post('/trips', (req, res) => {
  trips.push({ departure: req.body.departure, arrival: req.body.arrival });
  res.json({ allTrips: trips });
 });

//Pour supprimer voyage (deleteTrip):
router.delete('/trips', (req, res) => {
  const deleteTripId = req.params.id
  res.json({ });
 });

 //Pour acheter trajet (purchaseTrip):

 //Pour afficher les trajets dispo selon la recherche (allTrips): 
 router.get('/trips', (req, res) => {
  res.json({ allTrips: trips });
 });

 //Pour ajouter à l'achat :



module.exports = router;


