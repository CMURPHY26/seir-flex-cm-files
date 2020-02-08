//create the express variable to use the express library
const express = require('express');

// console.log("Hello, I'm running!");

// calls the express function to allow it to deal with requests
const app = express();

//tells the application what to do with the request and use response object to send response.


app.get("/secret", (req, res) => {
    res.send("You found the secret URL!");
});

app.get("/", (request, response) => {
    response.send("Hi from the back end!Welcome to the root index page.");
});

app.get("/somedata", (req, res) => {
    res.send("Here is your information");
});

// app.post("/", (request, response) => {
//     response.send("Welcome to the root index page.");
// });

//runs a web server and tells it which port to run on
app.listen(3000, () => {
    console.log("server is listening on port 3000");
});