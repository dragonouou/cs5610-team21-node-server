const recipeService = require("../services/recipes.service.server")
const url = require('url')

module.exports = (app) => {
    const findAllRecipes = (req, res) => {
        recipeService.findAllRecipes()
            .then(recipes => res.send(recipes))
    }

    const findRecipeById = (req, res) => {
        const recipeId = req.params.recipeId
        recipeService.findRecipeById(recipeId)
            .then(recipe => res.send(recipe))
    }

    const findRecipesForUser = (req, res) => {
        recipeService.findRecipesForUser(req.params.userId)
            .then(recipes => res.send(recipes))
    }

    const updateRecipe = (req, res) => {
        const recipeId = req.params.recipeId
        const newRecipe = req.body
        recipeService.updateRecipe(recipeId,newRecipe)
            .then(status => res.send(status))
    }

    const createRecipe = (req, res) =>{
        recipeService.createRecipe(req.body)
            .then(actualRecipe => res.send(actualRecipe))
    }

    const findRecipesByTitle = (req, res) => {
        const searchCriteria =  req.query.criteria
        recipeService.findRecipesByTitle(searchCriteria)
            .then(recipes => res.send(recipes))
    }

    const deleteRecipe = (req, res) => {
        const recipeId = req.params.recipeId
        recipeService.deleteRecipe(recipeId)
            .then(status => res.send(status))
    }

    app.get('/api/recipes',findAllRecipes)
    app.get('/api/users/:userId/recipes', findRecipesForUser)
    app.get('/api/recipes/search',findRecipesByTitle)
    app.get('/api/recipes/:recipeId',findRecipeById)
    app.put('/api/recipes/:recipeId', updateRecipe)
    app.post('/api/recipes',createRecipe)
    app.delete('/api/recipes/:recipeId',deleteRecipe)
}

