const Recipe = require('../models/Recipe');

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
    async updateFavorites(req, res){
        try{ 
            if(req.body.id && req.body.isFavorite){
                let recipe = await Recipe.update({_id: req.body.id}, {isFavorite: req.body.isFavorite});
                res.send({
                    message: "Recipe updated"
                });
            }else{
                throw "ID or isFavorites not found";
            }
        }catch(err){
            res.status(400).send({
                error: `Error ${err}`
            })
        }
    },
}