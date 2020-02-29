const express = require('express');
const router = express.Router();

const Fruit = require("../models/fruits.js");
//Routes:
//NEW ROUTE
router.get('/new', (req, res)=>{
    res.render('new.ejs');
});

//SECRET SEED ROUTE (not part of rest just a custom path)
router.get("/seed", (req, res) => {
    Fruit.create([
        {
            name:'grapefruit',
            color:'pink',
            readyToEat:true
        },
        {
            name:'grape',
            color:'purple',
            readyToEat:false
        },
        {
            name:'avocado',
            color:'green',
            readyToEat:true
        }
    ], (error, data) => {
        res.redirect("/fruits");
    })
});

//SHOW ONE PAGE
router.get("/:id", (req, res) => {
    Fruit.findById(req.params.id, (error, foundFruit) => {
        res.render("show.ejs", {fruit: foundFruit});
    });
});

//CREATE ROUTE
router.post("/", (req, res) => {
    if (req.body.readyToEat === "on") {
      //if checked, req.body.readyToEat is set to 'on'
      req.body.readyToEat = true;
    } else {
      //if not checked, req.body.readyToEat is undefined
      req.body.readyToEat = false;
    }
    Fruit.create(req.body, (error, result) => {
      // res.send(result);
      res.redirect("/fruits");
    });
  });

//EDIT/UPDATE ROUTE
router.get("/:id/edit", (req, res) => {
    Fruit.findById(req.params.id, (err, foundFruit) => {
        res.render("edit.ejs", {fruit: foundFruit});
    });
});


//PUT/UPDATE
router.put('/:id', (req, res)=>{
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    Fruit.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateModel) => {
        res.redirect("/fruits");
    })
});

//INDEX ROUTE...aka SHOW ALL
router.get('/', (req, res) => {
    Fruit.find({}, (error, allFruits) => {
        // console.log(allFruits);
        // res.send(fruits);
        res.render('index.ejs', {
            fruits: allFruits
        });
    })
});


//DELETE
router.delete("/:id", (req, res) => {
    Fruit.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/fruits");
    });
});

module.exports = router;