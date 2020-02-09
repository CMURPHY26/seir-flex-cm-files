//to call .env variables use process.env.Variable 
//where variable is what your calling from the .env file
require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT;


// app.get("/calc/:num1/:num2", (req, res) => {
//     console.log(req.params);
//     let sum = Number(req.params.num1) + Number(req.params.num2);
    
//     res.send("the sum is:" + sum);
// });

app.get("/calc/:num1/:num2", (req, res) => {
    console.log("req.query is:", req.query);

    if( req.query.operation === "add") {
        let sum = Number(req.params.num1) + Number(req.params.num2);
        res.send("the sum is: " + sum);
    } else if( req.query.operation === "subtract") {
        let difference = Number(req.params.num1) - Number(req.params.num2);
        res.send("The difference is: " + difference)
    } else if(req.query.operation === "multiply") {
        let product  = Number(req.params.num1) * Number(req.params.num2);
        res.send("The product is: " + product);
    } else if( req.query.operation === "divide") {
        let quotient = Number(req.params.num1) / Number(req.params.num2);
        res.send("The quotient is: " + quotient);
    } else {
        res.send("no operation");
    };
    
});



app.listen(port, ()=>{
    console.log('app is running on port: ', port);
});
