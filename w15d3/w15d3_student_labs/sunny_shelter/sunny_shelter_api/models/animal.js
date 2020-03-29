const mongoose = require('mongoose');


const animalSchema = new mongoose.Schema({
        name: String,
        species: String,
        breed: String,
        image: {type: String, default: 'https://loremflickr.com/240/120'},
        age: Number,
        adopted: Boolean,
        personalityTraits: [{type: String}]
})

module.exports = mongoose.model("Animal", animalSchema);