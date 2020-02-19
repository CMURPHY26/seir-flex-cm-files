require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;
const methodOverride = require("method-override");
//MODELS NOTE: it must start with ./ if it's just a file, not an NPM package
const scientists = require("./models/scientists.js")

//Tell express to use the middleware to process/access data
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));


app.get("/planet", (req, res) => {
    res.render("index.ejs", {scientists: scientists});
});

app.get("/planet/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/", (req, res) => {
    // console.log(req.body);
    scientists.push(req.body);
    // console.log(scientists);
    res.redirect("/planet");
});



app.listen(port, () => {
    console.log("Server is running on port", port);
})