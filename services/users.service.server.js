// let users = require('./users.json')
const usersDao = require('../daos/users.dao.server')

const findAllUsers = () => usersDao.findAllUsers()

const findAllUsersDetails = () => usersDao.findAllUsersDetails()

const findUserById = (userId) => usersDao.findUserById(userId)

const findUserByIdDetails = (userId) => usersDao.findUserByIdDetails(userId)

const createUser = (newUser) => usersDao.createUser(newUser)

const updateUser = (uid, newUser) => usersDao.updateUser(uid, newUser)

const findUserByCredentials = (email, pw) => usersDao.findUserByCredentials(email,pw)

module.exports = {
    findUserById,
    createUser,
    updateUser,
    findAllUsers,
    findUserByIdDetails,
    findAllUsersDetails,
    findUserByCredentials
}
