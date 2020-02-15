// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const port = 3000;

// =======================================
//              DATABASE
// =======================================
const bakedGoods = require('./models/bakedgoods.js');

// =======================================
//              ROUTES
// =======================================
//MIDDLEWARE to handle data submissions
app.use("/bakedgoods", (req, res, next) => {
  console.log("I run for all routes");
  next();
});

//add near top, around other app.use() calls
//this allows you to access the data in the body
app.use(express.urlencoded({extended:false}));

// index route
app.get('/bakedgoods', (req, res) => {
  res.render("index.ejs", {bakedGoods: bakedGoods});
});

app.post("/bakedgoods/", (req, res) => {
  console.log("body", req.body);
  let bakedGood = {};
  bakedGood.name = req.body.name;
  bakedGood.price = req.body.price;
  bakedGood.image = req.body.image;
  bakedGoods.push(bakedGood);
  console.log("bakedGoods", bakedGoods)
  res.redirect("/bakedgoods/");
})

//put this above your show.ejs route
app.get("/bakedgoods/new", (req, res) => {
  res.render("new.ejs");
});

// show route
app.get('/bakedgoods/:id', (req, res) => {
  // res.send(bakedGoods[req.params.id]);
  res.render("show.ejs", {bakedGood: bakedGoods[req.params.id]})
});

// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`Biscoff Bakery app listening on port: ${port}`)
});
