//Load mongoose from npm - need to include
//requirements for each file
const mongoose = require("mongoose");

//Instatiate new mongoose schema class
const fruitSchema = new mongoose.Schema({
    name: {type: String, required: true},
    color: {type: String, required: true},
    readyToEat: Boolean
});

const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;