const express = require('express');
const router = express.Router();
const RecipeController = require('../controllers/recipe');
const checkAuth = require('../config/checkAuth');

router.get('/recipes/:category', RecipeController.getRecipesByCategory);
router.get('/recipes',  RecipeController.getAllRecipes);
router.get('/recipe/:id', RecipeController.getRecipeByID);
router.get('/favorites', checkAuth, RecipeController.getFavoriteRecipes);

router.put('/recipe/:id/setToFavorites', checkAuth, RecipeController.setToFavorites);
router.put('/recipe/:id/deleteFromFavorites', checkAuth, RecipeController.deleleFromFavorites);

module.exports = router;