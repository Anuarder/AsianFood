const express = require('express');
const router = express.Router();
const RecipeController = require('../controllers/recipe');

router.get('/recipes/:category', RecipeController.getDataByCategory);
router.get('/recipes', RecipeController.getAllData);
router.get('/recipe/:id', RecipeController.getDataByID);

module.exports = router;