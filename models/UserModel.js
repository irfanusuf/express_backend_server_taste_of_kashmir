const mongoose = require('mongoose');   //importing mongose which is a library to connect with mongo db and create schema 


// mongoose schema for user 


const User = mongoose.model('User', {
    username: String,
    email: {type : String , unique: true , required : true},
    password: String,
    profilePicUrl: String,
    recipeList: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe'},

});

module.exports = User;