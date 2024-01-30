const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://lamechet4:812uskGfTGQ0KFBl@cluster0.q1kz9hl.mongodb.net/Tickethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));