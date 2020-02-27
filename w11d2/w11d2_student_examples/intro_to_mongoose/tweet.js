const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create a new Schema
//This will define the shape of the documents in the collection
//https://mongoosejs.com/docs/guide.html

const tweetSchema = new Schema({
    title: String,
    body: String,
    author: String,
    likes: {type: Number, default: 0},
    deleted: {type: Boolean, default: false}
    }, 
    {timestamps: true}
);

// Creating Tweet model : We need to convert our schema into a model-- will be stored in 'tweets' collection.  Mongo does this for you automatically
// Models are fancy constructors compiled from Schema definitions
// An instance of a model is called a document.
// Models are responsible for creating and reading documents from the underlying MongoDB Database
// from here: https://mongoosejs.com/docs/models.html
const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports= Tweet;