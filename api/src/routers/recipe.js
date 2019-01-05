const express = require('express');
const router = express.Router();
const RecipeController = require('../controllers/recipe');
const checkAuth = require('../config/checkAuth');

router.get('/recipes/:category', RecipeController.getRecipesByCategory);
router.get('/recipes', checkAuth, RecipeController.getAllRecipes);
router.get('/recipe/:id', RecipeController.getRecipeByID);

router.put('/recipes/:category', RecipeController.updateFavorites);
router.put('/recipes', RecipeController.updateFavorites);
router.put('/recipe/:id', RecipeController.updateFavorites);

module.exports = router;