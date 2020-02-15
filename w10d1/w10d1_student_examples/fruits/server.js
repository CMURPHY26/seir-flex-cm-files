require("dotenv").config();
const express = require('express');
const app = express();
const fruits = require('./models/fruits.js');
const port = process.env.PORT;

app.get('/fruits', (request, response)=>{
    response.render('index.ejs', {
        fruits: fruits
    });
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
