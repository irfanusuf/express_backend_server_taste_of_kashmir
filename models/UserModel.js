const mongoose = require('mongoose');   //importing mongose which is a library to connect with mongo db and create schema 


// mongoose schema for user 


const User = mongoose.model('User', {
    username: String,
    email: String,
    password: String,
});

module.exports = User;