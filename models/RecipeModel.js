const mongoose = require('mongoose');   //importing mongose which is a library to connect with mongo db and create schema 


// mongoose schema for user 


const Recipe = mongoose.model('Recipe', {
    title : String ,
    ingredients : String,
    instructions : String,
    imageUrl: String
});

module.exports = Recipe;