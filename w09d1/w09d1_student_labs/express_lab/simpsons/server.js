const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log("server running on port 3000");
});

app.get("/", (req, res) => {
    res.send("The server is running!");
})

app.get("/Homer", (req, res) => {
    res.send("Homer's Route");
});

app.get("/Marge", (req, res) =>{
    res.send("Marge's Route");
});

app.get("/Bart", (req, res) => {
    res.send("Bart's Route");
});

app.get("/Lisa", (req, res) => {
    res.send("Lisa's Route");
});

app.get("/Maggie", (req, res) => {
    res.send("Maggie's Route");
});

app.get("/Snowball-II", (req, res) => {
    res.send("Snowball II Route");
});

app.get("/Santas-Little-Helper", (req,res)=> {
    res.send("Santa's Little Helper");
});
