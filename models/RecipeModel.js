const mongoose = require('mongoose');   //importing mongose which is a library to connect with mongo db and create schema 


// mongoose schema for user 


const Recipe = mongoose.model('Recipe', {
    title : String ,
    ingredients : String,
    instructions : String,
    imageUrl: String,
    author : { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
 
});

module.exports = Recipe;







// const mongoose = require('mongoose');

// const recipeSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     ingredients: { type: String, required: true },
//     instructions: { type: String, required: true },
//     imageUrl: { type: String, required: true },
//     user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
// });

// const Recipe = mongoose.model('Recipe', recipeSchema);

// module.exports = Recipe;