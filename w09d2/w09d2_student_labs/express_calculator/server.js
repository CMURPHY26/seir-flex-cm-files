//to call .env variables use process.env.Variable 
//where variable is what your calling from the .env file
require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT;


app.get("/calc/:num1/:num2", (req, res) => {
    console.log(req.params);
    let sum = Number(req.params.num1) + Number(req.params.num2);
    
    res.send("the sum is:" + sum);
});



app.listen(port, ()=>{
    console.log('app is running on port: ', port);
});
