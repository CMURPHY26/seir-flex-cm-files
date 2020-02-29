const express = require('express');
const app = express();
const router = express.Router();
const methodOverride = require('method-override');
//Load up mongoose npm as mongoose
const mongoose = require('mongoose');

const fruitsController = require('./controllers/fruits.js');


//Connect mongoose to mongo db:
//Mongo won't create fruitsdb until data added
mongoose.connect('mongodb://localhost:27017/fruitsdb', { useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});


app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use('/fruits', fruitsController);




app.listen(3000, ()=>{
    console.log('listening');
});