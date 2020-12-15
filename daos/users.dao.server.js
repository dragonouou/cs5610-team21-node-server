const usersModel = require('../models/users/users.models.server')

const findAllUsers = () => usersModel.find()

const findAllUsersDetails = () => usersModel.find().populate("favorites").exec()

const findUserById = (uid) => usersModel.findById(uid)

const findUserByIdDetails = (uid) => usersModel.findById(uid)
    .populate("favorites")
    .populate("following")
    .populate("cart")
    .populate({path: "orders", populate: {path: "recipes"}}).exec()

const createUser = (newUser) => usersModel.create(newUser)

const updateUser = (uid, newUser) => usersModel.update({_id: uid}, {$set: newUser})

const findUserByCredentials = (email, password) =>
    usersModel.find({email:email, password: password})

module.exports = {
    findUserById,
    createUser,
    updateUser,
    findAllUsers,
    findUserByIdDetails,
    findAllUsersDetails,
    findUserByCredentials
}
