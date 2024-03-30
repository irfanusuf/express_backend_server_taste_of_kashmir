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
const authJwt = require ('./middlewares/Auth')
const multMidWare = require('./middlewares/multer');
const getLocalRecipes = require('./controllers/getLocalRecipe');


// importing config for dotenv
// require('dotenv').config();



const app = express();           //intiating express app 
const port = 4000               //defining port 
const url =  "mongodb+srv://irfanusuf33:user_pwd@testcluster.a0pehai.mongodb.net/meowDB?retryWrites=true&w=majority&appName=testCluster"    // declaring url

app.use(cors());                             // using cors middleware which enables cross origin resource sharing 
app.use(bodyParser.json());                  // using bodyparser which converts body data into json 




// connecting mongodb on local host with master db 

const connectDb = async ()=>{
  const connect = await mongoose.connect(url)
  if (connect){
    console.log(`DB connected on ${url}`)
  }
  else{
    console.log("db error")
  }
}

connectDb()



// defining routes and their handler functiions which are in seperate file systems
app.get('/' , (req ,res)=>{return res.json({message : " server is running on render "})})
app.post('/api/signup', handleRegister);
app.post('/api/login', handleLogin);
app.get('/rapid-api/fetch/recipes', fetchRecipeData);
app.get('/api/fetch/recipes', getLocalRecipes);
app.post('/api/post/recipe', multMidWare, authJwt,  PostRecipeData);


// starting a server which starts to listen on port defined in env 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
