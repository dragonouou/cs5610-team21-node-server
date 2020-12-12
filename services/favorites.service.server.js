const favoritesDao = require('../daos/favorites.dao.server')

const findFavoritesForUser = () => favoritesDao.findFavoritesForUser()

const addFavorite = () => favoritesDao.addFavorite()

module.exports = {
    findFavoritesForUser,
    addFavorite
}
