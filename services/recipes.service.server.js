const recipeDao = require('../daos/recipes.dao.server')

const findAllRecipes = () =>
    recipeDao.findAllRecipes()

const findRecipeById = (recipeId) =>
    recipeDao.findRecipeById(recipeId)

const findRecipesForUser = (userId) =>
    recipeDao.findRecipesForUser(userId)

const updateRecipe = (recipeId, newRecipe) =>
    recipeDao.updateRecipe(recipeId,newRecipe)

const createRecipe = (newRecipe) =>
    recipeDao.createRecipe(newRecipe)

module.exports = {
    findAllRecipes,
    findRecipeById,
    findRecipesForUser,
    updateRecipe,
    createRecipe
}
