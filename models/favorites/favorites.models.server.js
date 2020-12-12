const mongoose = require('mongoose')
const favoriteSchema = require('./recipes.schema.server')
const favoriteModel = mongoose.model('FavoriteModel',favoriteSchema)
module.exports = favoriteModel

