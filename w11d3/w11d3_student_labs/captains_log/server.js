require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;


app.use(express.urlencoded({extended: true}));


//NEW ROUTE
app.get("/logs/new", (req, res) => {
    res.render('new.ejs');
});


//CREATE ROUTE
app.post("/logs", (req, res) => {
    if(req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true;
     } else {
        req.body.shipIsBroken = false;
    }
    res.send(req.body);
})






app.listen(port, ()=> {
    console.log("server is running on port", port);
})