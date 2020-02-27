const express = require('express');
const app = express();

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

//SHOW PAGE
app.get("/fruits/:id", (req, res) => {
    Fruit.findById(req.params.id, (error, foundFruit) => {
        res.render("show.ejs", {fruit: foundFruit});
    });
});

//CREATE ROUTE
app.post('/fruits/', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    //Mongoose create
    //result is object/document that is created.
    Fruit.create(req.body, (error, result) => {
        res.send(result);
    });
});

//INDEX ROUTE
app.get('/fruits', (req, res) => {
    Fruit.find({}, (error, allFruits) => {
        // console.log(allFruits);
        // res.send(fruits);
        res.render('index.ejs', {
            fruits: allFruits
        });
    })
});



app.listen(3000, ()=>{
    console.log('listening');
});