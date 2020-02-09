require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log('app is running on port: ', port);
})

//to call .env variables use process.env.Variable 
//where variable is what your calling from the .env file