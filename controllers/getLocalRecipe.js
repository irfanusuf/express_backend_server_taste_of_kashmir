const Recipe = require('../models/RecipeModel');

const getLocalRecipes = async (req, res) => {
  try {
   
    const recipes = await Recipe.find().populate('author', 'username'); 
    console.log(recipes)

    res.status(200).json(recipes);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = getLocalRecipes
    