require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;
const methodOverride = require('method-override');
//Load up mongoose npm as mongoose
const mongoose = require('mongoose');
const logsController = require("./controllers/logs.js");

mongoose.connect('mongodb://localhost:27017/captainlogsdb', { useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});



//MIDDLEWARE
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use("/logs", logsController);


// //ROOT ROUTE REDIRECT
// app.get("/", (req, res) => {
//     res.redirect("/logs");
// })

// //WILDCARD ROUTE REDIRECT
// app.get("*", (req, res) => {
//     res.redirect("/logs");
// })

app.listen(port, ()=> {
    console.log("server is running on port", port);
})