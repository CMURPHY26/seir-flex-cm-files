require("dotenv").config();
// DEPENDENCIES
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const mongoose = require('mongoose');
const cors = require('cors')
const holidaysController = require('./controllers/holidays.js');


//MONGO/MONGOOSE CONNECTION
//...farther down the page
// Error / Disconnection
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))

mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

//...farther down the page
mongoose.connect('mongodb://localhost:27017/holidays', { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...')
})


//MIDDLEWARE
//need to load the json to use it for the routes so add before controllers
app.use(express.json());//use .json(), not .urlencoded()

//NEED TO LOAD THE CORS MIDDLEWARE BEFORE ROUTES
const whitelist = ['http://localhost:3000', 'https://fathomless-sierra-68956.herokuapp.com']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}


//For production and a secure environment, do this:
// app.use(cors(corsOptions)) // Note: all routes are now exposed. If you want to limit access for specific verbs like POST or DELETE you can look at the npm documentaion for cors (for example with OMDB - it's ok for anyone to see the movies, but you don't want just anyone adding a movie)

//But to Allow EVERYONE, do this:
app.use(cors());//Allows everyone. Use with caution, only for dev, not for real apps


//Mount the routes from holidays
app.use('/holidays', holidaysController);






app.listen(PORT, () => {
  console.log('🎉🎊', 'celebrations happening on port', PORT, '🎉🎊',)
})