require("dotenv").config() ;
require("./models/connection") ;

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const cors = require("cors");


var indexRouter = require('./routes/index');
var bookingRouter = require('./routes/booking');
var cartRouter = require('./routes/cart');
var tripRouter = require('./routes/trip');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/booking', bookingRouter);
app.use('/cart', cartRouter);
app.use('/trip', tripRouter);

module.exports = app;
