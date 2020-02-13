require("dotenv").config();

const express = require('express');

const app = express();

const port = process.env.PORT;

//NOTE: it must start with ./ if it's just a file, not an NPM package
const fruits = require("./models/fruits.js"); 


app.get("/fruits/:id", (req, res) => {
    // res.send(fruits[req.params.id]);
    res.render("show.ejs", { fruit: fruits[req.params.id] });
});

app.get("/fruits/", (req, res) => {
    res.send(fruits);
});











app.listen(port, () => {
    console.log("server is running on ", port);
});



