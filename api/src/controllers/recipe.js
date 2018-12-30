const Recipe = require('../models/recipe');

module.exports = {
    async getDataByCategory (req, res){
        try{ 
            let recipe = await Recipe.find({category: req.params.category});
            res.send(recipe);
        }catch(err){
            res.status(400).send({
                error: "Error"
            })
        }
    },
    async getDataByID(req, res){
        try{ 
            let recipe = await Recipe.find({_id: req.params.id});
            res.send(recipe);
        }catch(err){
            res.status(400).send({
                error: "Error"
            })
        }
    },
    async getAllData(req, res){
        try{ 
            let recipe = await Recipe.find({});
            res.send(recipe);
        }catch(err){
            res.status(400).send({
                error: "Error"
            })
        }
    }
}