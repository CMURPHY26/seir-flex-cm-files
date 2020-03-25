require("dotenv").config();
// DEPENDENCIES
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const mongoose = require('mongoose');
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
//Mount the routes from holidays
app.use('/holidays', holidaysController);






app.listen(PORT, () => {
  console.log('🎉🎊', 'celebrations happening on port', PORT, '🎉🎊',)
})