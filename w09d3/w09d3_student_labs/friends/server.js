require("dotenv").config();

const express = require('express');

const app = express();

const port = process.env.PORT;

const friends = ["Lauren", "Aj", "Ty", "Alex", "Garrett"];

app.get("/friends", (req, res) => {
    res.send(friends);
});

app.get("/friends/:id", (req, res) => {
    res.send(friends[req.params.id]);
});


app.listen(port, () => {
    console.log("server is running on port ", port);
})