//importing dependencies 
const express = require('express');         // express is libraray in which we can make backend servers 
const cors = require('cors');               // cross origin resuorce sharing 
const bodyParser = require('body-parser')   // used to take data from body in the form of json
const mongoose = require('mongoose');       // library for connecting with mongo db database


//importing controller  Functions 
const handleRegister =require('./controllers/Register');
const fetchRecipeData =require('./controllers/fetchRecipeData')
const handleLogin = require ('./controllers/Login')
const PostRecipeData = require ( './controllers/postRecipeData')


// importing config for dotenv
require('dotenv').config();



const app = express();                       //intiating express app 
const port = process.env.PORT || 5000;       //defining port 
const url = process.env.MONGO_URL;          // declaring url

app.use(cors());                             //  using cors middleware which enables cross origin resource sharing 
app.use(bodyParser.json());                  // using bodyparser which converts body data into json 




// connecting mongodb on local host with master db 
if(mongoose.connect(url))
{
  console.log(`Database Connected on ${url}`)
}


// defining routes and their handler functiions which are in seperate file systems
app.post('/api/signup', handleRegister);
app.post('/api/login', handleLogin);
app.get('/api/fetch/recipes', fetchRecipeData);
app.post('/api/post/recipes', PostRecipeData);


// starting a server which starts to listen on port defined in env 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
