const express = require('express');
const router = express.Router();

const Logs = require("../models/logs.js");

//NEW ROUTE
router.get("/new", (req, res) => {
    res.render('new.ejs');
});



//SEED ROUTE
router.get("/seed", (req, res) => {
    Logs.create([
        {title: 'Alien Meeting1',
        entry: 'Met aliens',
        shipIsBroken: false,},
        {title: 'Alien Meeting2',
        entry: 'Met aliens again on new planet',
        shipIsBroken: false,},
        {title: 'Alien Meeting3',
        entry: 'Met aliens again on new planet',
        shipIsBroken: true,},
        {title: 'Alien Meeting4',
        entry: 'Met aliens again on new planet',
        shipIsBroken: true,},
    ], (err, createdLogs) => {
        res.redirect("/logs")
    })
});

//SHOW ROUTE
router.get("/:id", (req, res) => {
    Logs.findById(req.params.id, (err, logEntry) => {
        // console.log(logEntry)
        res.render("show.ejs", {log: logEntry});
    });
});


//EDIT/UPDATE ROUTE
router.get("/:id/edit", (req, res)=> {
    Logs.findById(req.params.id, (err, logEntry) => {
        res.render("edit.ejs", {log: logEntry,id: req.params.id});
    })
});


//CREATE ROUTE
router.post("/", (req, res) => {
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

//PUT/UPDATE ROUTE
router.put("/:id", (req, res) => {
    if(req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true;
     } else {
        req.body.shipIsBroken = false;
    }
    Logs.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedLog) => {
        res.redirect(`/logs/${req.params.id}`);
    });
});

//INDEX ROUTE
router.get("/", (req, res) => {
    Logs.find({}, (err, allLogs) => {
        res.render("index.ejs", {logs: allLogs});
    })
});


//DELETE ROUTE
router.delete("/:id", (req, res) => {
    Logs.findByIdAndRemove(req.params.id, (err, deletedLog) =>{
        res.redirect("/logs");
    });
});





module.exports = router;