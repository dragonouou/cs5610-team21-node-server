let users = require('./users.json')
const usersDao = require('../daos/users.dao.server')

const findUserById = (userId) => usersDao.findUserById

const createUser = (newUser) => usersDao.createUser(newUser)

const updateUser = (uid, newUser) => usersDao.updateUser(uid, newUser)

module.exports = {
    findUserById,
    createUser,
    updateUser
}
