require("dotenv").config();
const express = require('express');
const app = express();
const fruits = require('./models/fruits.js');
const port = process.env.PORT;

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
app.use(express.static('public'));

app.get('/fruits', (request, response)=>{
    response.render('index.ejs', {
        fruits: fruits
    });
});

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

app.post("/products", (req, res) => {
    console.log("Hit create route");
    console.log("Request.body is: ", req.body)
    // res.send(req.body);
    res.json(req.body);
})


//add a new get route for /fruits/new
app.get("/fruits/new", (request, response) => {
    response.render('new.ejs');
});


app.get('/fruits/:indexOfFruitsArray', (request, response)=>{
    response.render('show.ejs',
        {
            fruit: fruits[request.params.indexOfFruitsArray]
        }
    );
});

app.listen(port, ()=>{
    console.log('I am listening on port ', port);
});
