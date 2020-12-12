const favoriteModel = require('../models/favorites/favorites.models.server')

const findFavoritesForUser = (userId) =>
    favoriteModel.find({userId:userId})

const addFavorite = (userId, newRecipeId) =>
    favoriteModel.update({userId:userId},{$push: {favorites:newRecipeId}})

module.exports = {
    findFavoritesForUser, addFavorite
}

