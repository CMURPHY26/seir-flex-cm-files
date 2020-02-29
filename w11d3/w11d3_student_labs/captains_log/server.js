require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;
const methodOverride = require('method-override');
//Load up mongoose npm as mongoose
const mongoose = require('mongoose');

//Connect mongoose to mongo db:
//Mongo won't create fruitsdb until data added
mongoose.connect('mongodb://localhost:27017/fruitsdb', { useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

//MIDDLEWARE
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));



//NEW ROUTE
app.get("/logs/new", (req, res) => {
    res.render('new.ejs');
});


//CREATE ROUTE
app.post("/logs", (req, res) => {
    if(req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true;
     } else {
        req.body.shipIsBroken = false;
    }
    res.send(req.body);
})






app.listen(port, ()=> {
    console.log("server is running on port", port);
})