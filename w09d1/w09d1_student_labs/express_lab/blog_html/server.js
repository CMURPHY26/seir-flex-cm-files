const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log("server is running");
});

app.get("/", (req,res)=> {
    res.send(`<html>
                    <body>
                        <h1>BLOG PAGE IS WORKING</h1>
                    </body>
             <html>`);
});