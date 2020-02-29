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
        // console.log(logEntry)
        res.render("show.ejs", {log: logEntry});
    });
});


//EDIT/UPDATE ROUTE
app.get("/logs/:id/edit", (req, res)=> {
    Logs.findById(req.params.id, (err, logEntry) => {
        res.render("edit.ejs", {log: logEntry,id: req.params.id});
    })
});

//PUT/UPDATE ROUTE
app.put("/logs/:id", (req, res) => {
    Logs.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedLog) => {
        res.redirect(`/logs/${req.params.id}`);
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


//DELETE ROUTE
app.delete("/logs/:id", (req, res) => {
    Logs.findByIdAndRemove(req.params.id, (err, deletedLog) =>{
        res.redirect("/logs");
    });
});

//SEED ROUTE
app.get("/seed", (req, res) => {
    Logs.create([
        {title: 'Alien Meeting1',
        entry: 'Met aliens',
        shipIsBroken: false,},
        {title: 'Alien Meeting2',
        entry: 'Met aliens again on new planet',
        shipIsBroken: false,},
        {title: 'Alien Meeting3',
        entry: 'Met aliens again on new planet',
        shipIsBroken: false,},
        {title: 'Alien Meeting4',
        entry: 'Met aliens again on new planet',
        shipIsBroken: false,},
    ], (err, createdLogs) => {
        res.redirect("/logs")
    })
});

//ROOT ROUTE REDIRECT
app.get("/", (req, res) => {
    res.redirect("/logs");
})




app.listen(port, ()=> {
    console.log("server is running on port", port);
})