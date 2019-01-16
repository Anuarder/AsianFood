const Recipe = require('../models/Recipe');
const User = require('../models/User');

module.exports = {
    async getRecipesByCategory (req, res){
        try{ 
            let recipes = await Recipe.find({category: req.params.category});
            res.send({
                recipes: recipes
            });
        }catch(err){
            res.status(400).send({
                error: "Recipes not found"
            })
        }
    },
    async getRecipeByID(req, res){
        try{ 
            let recipe = await Recipe.find({_id: req.params.id});
            res.send({
                recipe: recipe
            });
        }catch(err){
            res.status(400).send({
                error: "Recipe not found"
            })
        }
    },
    async getAllRecipes(req, res){
        try{ 
            let recipes = await Recipe.find({});
            res.send({
                recipes: recipes
            });
        }catch(err){
            res.status(400).send({
                error: "Recipes not found"
            })
        }
    },
    async getFavoriteRecipes(req, res){
        try{
            // Потом сделаю
        }catch(err){
            res.send({
                error: err
            })
        }
    },
    async setToFavorites(req, res){
        try{
            await User.update({_id: req.userData.id}, {$addToSet: {favorites: req.params.id}});
            res.send({
                user: req.userData.id,
                recipe: req.params.id,
                message: 'Add to favorite'
            })
        }catch(err){
            res.send({
                error: err
            })
        }
    },
    async deleleFromFavorites(req, res){
        try{
            await User.update({_id: req.userData.id}, {$pull: {favorites: req.params.id}});
            res.send({
                message: "Recipe delete from favorites"
            })
        }catch(err){
            res.send({
                error: err
            })
        }
    },
    async searchRecipes(req, res){
        try{
            // Text search
        }catch(err){
            res.send({
                error: err
            })
        }
    }
}