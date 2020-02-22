require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;
const methodOverride = require("method-override");
//MODELS NOTE: it must start with ./ if it's just a file, not an NPM package
let scientists = require("./models/scientists.js")


//Tell express to use the middleware to process/access data
//Load body parser middleware
app.use(express.urlencoded({extended:true}));
//Load methodOverride middleware
app.use(methodOverride("_method"));


//NEW
app.get("/planet/new", (req, res) => {
    res.render("new.ejs");
});


//SHOW
app.get("/planet/:id", (req, res) =>{
    res.render("show.ejs", {scientist: scientists[req.params.id]});
});

//EDIT
app.get("/planet/:id/edit", (req, res) => {
    res.render("edit.ejs", {scientist: scientists[req.params.id], id: req.params.id});
});


//UPDATE

app.put("/planet/:id", (req, res) => {
       scientists[req.params.id] = req.body;
        res.redirect("/planet");
})


//DESTROY
app.delete("/planet/:id", (req, res) => {
    scientists.splice(req.params.id, 1);
    res.redirect("/planet");
});


//CREATE
app.post("/planet", (req, res) => {
    // console.log(req.body);
    const index = scientists.push(req.body) - 1;
    // console.log(scientists);
    res.redirect(`/planet/${index}`);
});


//DESTROY
app.delete("/planet/", (req, res) => {
    scientists.splice(0, scientists.length);
    // scientists = [];
    res.redirect("/planet");
});


//INDEX
app.get("/planet", (req, res) => {
    res.render("index.ejs", {scientists: scientists});
});


app.listen(port, () => {
    console.log("Server is running on port", port);
})