const express = require('express');
const app = express();
const animals = express.Router();
const Animal = require("../models/animal.js")




//INDEX ROUTE
animals.get('/', (req, res) => {
    Animal.find({}, (err, foundAnimals) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(foundAnimals)
    })
});

//CREATE ROUTE
animals.post("/", (req, res) => {
    let newAnimal = req.body;
    // console.log(newAnimal.personalityTraits);
    //conditional to convert multiple personality traits separated by either ", " or just "," to split into an array to store separate values in database, maybe to iterate over if necessary.
    if(newAnimal.personalityTraits.includes(", ")){
      newAnimal.personalityTraits = newAnimal.personalityTraits.split(", ");
    } else if(newAnimal.personalityTraits.includes(",")) {
      newAnimal.personalityTraits = newAnimal.personalityTraits.split(",");
    }

    Animal.create(newAnimal, (error, createdAnimal) => {
        if (error) {
            res.status(400).json({ error: error.message })
          }
          res.status(200).json(createdAnimal) //  .json() will send proper headers in response so client knows it's json coming back
    })
});


//DELETE ROUTE
animals.delete('/:id', (req, res) => {
    Animal.findByIdAndRemove(req.params.id, (err, deletedAnimal) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(deletedAnimal)
    })
  });


//UPDATE ROUTE:
animals.put('/:id', (req, res) => {
    Animal.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedAnimal) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(updatedAnimal)
    })
})


module.exports = animals;