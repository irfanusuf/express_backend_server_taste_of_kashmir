const Recipe = require('../models/RecipeModel');
const cloudinary = require('cloudinary');
const User = require('../models/UserModel')



cloudinary.config({
    cloud_name:   process.env.CLOUD_NAME ,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const PostRecipeData = async (req, res) => {

   
    const { title, ingredients, instructions } = req.body;
    const image = req.body.image;
    try {
        if (title !== "" && ingredients !== "" && instructions !== "") {

            const upload = await cloudinary.v2.uploader.upload(image, {
                folder: "recipe-pics",
            });

            const newRecipe = new Recipe({
                title,
                ingredients,
                instructions,
                imageUrl: upload.secure_url,
                author : req.userId
           
// 

            });

            await newRecipe.save();


            await User.findByIdAndUpdate(req.userId, { $push: { recipeList: newRecipe._id } });
            res.status(201).json({ message: "Recipe Created" });

        } else {
            res.json({ message: "All Fields Required" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

module.exports = PostRecipeData;
