const  Recipe  = require ('../models/RecipeModel');



const PostRecipeData = async ( req , res) =>{

const { title, ingredients, instructions, imageUrl} = req.body ;

const isRecipe = await Recipe.findOne({title});

if (!isRecipe) {

if ( title !== "" && ingredients !== "" && instructions !== "" ){

    const  newRecipe = new Recipe({title , ingredients , instructions , imageUrl });
    await newRecipe.save();
    res.status(201).json({ message : "Recipe Created"})
}
 else  {
    res.status(200).json({ message : "All Feilds Required"})
 }
}
else {
    res.json({message: " Recipe already in database"})
}




}


module.exports = PostRecipeData; 