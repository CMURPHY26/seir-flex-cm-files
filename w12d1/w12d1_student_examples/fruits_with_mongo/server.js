const express = require('express');
const app = express();
const methodOverride = require('method-override');
//Load up mongoose npm as mongoose
const mongoose = require('mongoose');



//Connect mongoose to mongo db:
//Mongo won't create fruitsdb until data added
mongoose.connect('mongodb://localhost:27017/fruitsdb', { useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});


const Fruit = require("./models/fruits.js");



app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

//Routes:
//NEW ROUTE
app.get('/fruits/new', (req, res)=>{
    res.render('new.ejs');
});

//SECRET SEED ROUTE (not part of rest just a custom path)
app.get("/fruits/seed", (req, res) => {
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
app.get("/fruits/:id", (req, res) => {
    Fruit.findById(req.params.id, (error, foundFruit) => {
        res.render("show.ejs", {fruit: foundFruit});
    });
});

//CREATE ROUTE
app.post("/fruits", (req, res) => {
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
app.get("/fruits/:id/edit", (req, res) => {
    Fruit.findById(req.params.id, (err, foundFruit) => {
        res.render("edit.ejs", {fruit: foundFruit});
    });
});


//PUT/UPDATE
app.put('/fruits/:id', (req, res)=>{
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
app.get('/fruits', (req, res) => {
    Fruit.find({}, (error, allFruits) => {
        // console.log(allFruits);
        // res.send(fruits);
        res.render('index.ejs', {
            fruits: allFruits
        });
    })
});


//DELETE
app.delete("/fruits/:id", (req, res) => {
    Fruit.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/fruits");
    });
});


app.listen(3000, ()=>{
    console.log('listening');
});