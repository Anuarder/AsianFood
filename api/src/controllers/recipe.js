const Recipe = require('../models/recipe');

module.exports = {
    async getRecipesByCategory (req, res){
        try{ 
            let recipe = await Recipe.find({category: req.params.category});
            res.send(recipe);
        }catch(err){
            res.status(400).send({
                error: "getRecipesByCategory Error"
            })
        }
    },
    async getRecipeByID(req, res){
        try{ 
            let recipe = await Recipe.find({_id: req.params.id});
            res.send(recipe);
        }catch(err){
            res.status(400).send({
                error: "getRecipeByID Error"
            })
        }
    },
    async getAllRecipes(req, res){
        try{ 
            let recipe = await Recipe.find({});
            res.send(recipe);
        }catch(err){
            res.status(400).send({
                error: "getAllRecipes Error"
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
                throw new SyntaxError("ID or isFavorites not found");
            }
        }catch(err){
            res.status(400).send({
                error: `updateFavorites Error ${err}`
            })
        }
    },
}