const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema(
    {
        title: {type: String, trim: true, require: true},
        summary: String,
        img: String,
        time: String,
        ingredients: [String],
        instructions: [String],
        category: String,
    },
    {
        collection: 'Recipes'
    },
    {
        versionKey: false
    }
);
module.exports =  mongoose.model("Recipe", RecipeSchema);