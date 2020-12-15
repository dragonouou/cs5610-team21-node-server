const recipeModel = require('../models/recipes/recipes.models.server')

const findAllRecipes = () =>
    recipeModel.find()

const findRecipeById = (recipeId) =>
    recipeModel.findById(recipeId)

const findRecipesForUser = (userId) =>
    recipeModel.find({chefId:userId})

const updateRecipe = (recipeId, newRecipe) =>
    recipeModel.update({_id:recipeId},{$set:newRecipe})

const createRecipe = (newRecipe) =>
    recipeModel.create(newRecipe)

const findRecipesByTitle = (title) =>
    recipeModel.find({$text:{$search:title}})

const deleteRecipe = (recipeId) =>
    recipeModel.remove({_id:recipeId})

module.exports = {
    findAllRecipes,
    findRecipeById,
    findRecipesForUser,
    updateRecipe,
    createRecipe,
    findRecipesByTitle,
    deleteRecipe
}

