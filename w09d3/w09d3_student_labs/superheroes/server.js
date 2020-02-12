require("dotenv").config();

const express = require("express");

const app = express();

const port = process.env.PORT;


// const superheroes = [ 'Superman', 'Wonder Woman', 'Black Panther' ];

const superheroes = [ 
    { name: "Superman", 
    powers: ['flight', 'invulnerability', 'x-ray vision']
    },
    { name: 'Wonder Woman',
    powers: ["WW power1", "WW power2"]
    }, 
    {name: 'Black Panther',
    powers: ["BP power1", "BP power2"]
    }
];

const villains = [
    {
     name: "Lex Luthor",
     powers: ["super brain"]
    },
    {
     name: "Ares",
     powers: ["shape shifting", "teleporting"]
     },
     {
      name: "Killmonger",
      powers: ["ability to fit in Black Panther's suit", "internet agreement that he looks badass"]
     }
];

app.get("/superheroes/:index", (req, res) => {
    res.send(`
    <h1>${superheroes[req.params.index].name}</h1>
        <ul>
            <li>${superheroes[req.params.index].powers[0]}</li>
            <li>${superheroes[req.params.index].powers[1]}</li>
        </ul>
        <h1>${villains[req.params.index].name}</h1>
        <ul>
            <li>${villains[req.params.index].powers[0]}</li>
            <li>${villains[req.params.index].powers[1]}</li>
        </ul>
    `);
});

app.get("/villains/:index", (req, res) => {
    res.send(`
    <h1>${villains[req.params.index].name}</h1>
    <ul>
    <li>${villains[req.params.index].powers[0]}</li>
    <li>${villains[req.params.index].powers[1]}</li>
    </ul>
    
    `);
});

app.get("/superheroes", (req, res) => {
    res.send(superheroes);
});

app.get("/villains", (req, res) => {
    res.send(villains);
});


app.listen(port, () => {
    console.log("Here to save the day...Port: ", port);
});