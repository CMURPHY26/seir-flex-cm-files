require("dotenv").config();

const express = require('express');

const app = express();

const port = process.env.PORT;

// const fruits = ['apple', 'banana', 'pear'];

const fruits = [
    {
        name:'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name:'pear',
        color: 'green',
        readyToEat: false
    },
    {
        name:'banana',
        color: 'yellow',
        readyToEat: true
    }
];

app.get("/fruits/:id", (req, res) => {
    res.send(fruits[req.params.id]);
});

app.get("/fruits/", (req, res) => {
    res.send(fruits);
});











app.listen(port, () => {
    console.log("server is running on ", port);
});



