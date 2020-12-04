let users = require('./users.json')
const usersDao = require('../daos/users.dao.server')

const findAllUsers = () => usersDao.findAllUsers()

const findUserById = (userId) => usersDao.findUserById(userId)

const createUser = (newUser) => usersDao.createUser(newUser)

const updateUser = (uid, newUser) => usersDao.updateUser(uid, newUser)

module.exports = {
    findUserById,
    createUser,
    updateUser,
    findAllUsers
}
