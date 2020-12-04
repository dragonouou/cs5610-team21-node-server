const usersModel = require('../models/users/users.models.server')

const findUserById = (uid) => usersModel.findById(uid)

const createUser = (newUser) => usersModel.create(newUser)

const updateUser = (uid, newUser) => usersModel.update({_id: uid}, {$set: newUser})

module.exports = {findUserById, createUser, updateUser}
