require("dotenv").config();
const express = require('express');
const app = express();
const fruits = require('./models/fruits.js');
const port = process.env.PORT;

//include the method-override package
const methodOverride = require("method-override");


/*
Create = POST
Read = GET
Update = PUT/PATCH
Delete/Destroy = DELETE

request
...you might want/need to do something to the data
....you use MIDDLEWARE to do that - next as parameter and invoke it - next()
response
*/

app.use((request,response, next) => {
    console.log('I run for all routes');
    //continue with your routing
    next();
});

//WITHOUT this middleware request.body is undefined
//with it....it adds a body key and sets it to
//whatever was sent in the body
app.use(express.urlencoded({extended: false}));
//...
//after methodOverride app has been defined
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride("_method"));
app.use(express.static('public'));


//NEW
//add a new get route for /fruits/new
app.get("/fruits/new", (request, response) => {
    response.render('new.ejs');
});

//EDIT
app.get("/fruits/:id/edit", (req, res) => {
    res.render("edit.ejs", {fruit: fruits[req.params.id], index: req.params.id})
});


//UPDATE - put
app.put("/fruits/:id", (req, res) => {
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }

    fruits[req.params.id] = req.body;
    res.redirect("/fruits");
});



//SHOW
app.get('/fruits/:indexOfFruitsArray', (request, response) =>{
    response.render('show.ejs',
    {
        fruit: fruits[request.params.indexOfFruitsArray], id: request.params.indexOfFruitsArray
    }
    );
});

//CREATE
//WITHOUT this route we would get 
//Cannot POST /fruits
app.post("/fruits", (request, response) => {
    console.log('body ', request.body);
    //if checked, req.body.readyToEat is set to 'on'
    if(request.body.readyToEat === 'on') {
        //do some data correction
        request.body.readyToEat = true;
        
        //if not checked, req.body.readyToEat is undefined
    } else {
        //do some data correction
        request.body.readyToEat = false;
    }
    
    let fruit = {};
    fruit.name = request.body.name;
    fruit.color = request.body.color;
    fruit.readyToEat = request.body.readyToEat;
    fruits.push(fruit);
    
    console.log('fruits ', fruits);
    response.redirect("/fruits");
});


// app.post("/products", (req, res) => {
//     console.log("Hit create route");
//     console.log("Request.body is: ", req.body)
//     // res.send(req.body);
//     res.json(req.body);
// })


//INDEX
app.get('/fruits', (request, response)=>{
    response.render('index.ejs', {
        fruits: fruits
    });
});




app.delete("/fruits/:indexOfFruitsArray", (req, res) => {
    //code that deletes a fruit here
    //remove the item from the array
    fruits.splice(req.params.indexOfFruitsArray, 1);
    res.redirect("/fruits"); //redirect to browser
});


//ROOT Route - redirect to index page
app.get("/", (req, res) => {
    res.redirect("/fruits");
});

app.listen(port, ()=>{
    console.log('I am listening on port ', port);
});
