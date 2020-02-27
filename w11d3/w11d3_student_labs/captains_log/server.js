require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;


app.get("/logs/new", (req, res) => {
    res.render('new.ejs');
})





app.listen(port, ()=> {
    console.log("server is running on port", port);
})