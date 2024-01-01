
// const axios = require('axios');  
// server side api call to third party server of rapid api (food recipe)
const fetchRecipe = async (params) => {
  try {
    const options = {
      method: 'GET',
      url: `https://food-recipes-with-images.p.rapidapi.com/?q=${params}`,
      headers: {
        'X-RapidAPI-Key': '79bd850338msh2791f9644fac656p197751jsnac6970a86c03',
        'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com',
      },
    };
    const response = await axios.request(options);
    return response.data;
  }

  catch (error) {
    console.error(error);
    throw error;
  }
};



const fetchRecipeData = async (req, res) => {
  try {
    const params = req.query.q;
    if (!params) {
      res.status(500).json({ message: 'no query' })
    }
    else {
      const recipeData = await fetchRecipe(params);
      res.json(recipeData);
    }


  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}



module.exports = fetchRecipeData;