require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;
const methodOverride = require('method-override');
//Load up mongoose npm as mongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/captainlogsdb', { useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

const Logs = require("./models/logs.js");

//MIDDLEWARE
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));



//NEW ROUTE
app.get("/logs/new", (req, res) => {
    res.render('new.ejs');
});


//SHOW ROUTE
app.get("/logs/:id", (req, res) => {
    Logs.findById(req.params.id, (err, logEntry) => {
        console.log(logEntry)
        res.render("show.ejs", {log: logEntry});
    });
});

//CREATE ROUTE
app.post("/logs", (req, res) => {
    if(req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true;
     } else {
        req.body.shipIsBroken = false;
    }
    Logs.create(req.body, (err, newLog) => {
        // console.log(newLog.id)
        res.redirect(`/logs/${newLog.id}`);
    });
});

//INDEX ROUTE
app.get("/logs", (req, res) => {
    Logs.find({}, (err, allLogs) => {
        res.render("index.ejs", {logs: allLogs});
    })
});






app.listen(port, ()=> {
    console.log("server is running on port", port);
})