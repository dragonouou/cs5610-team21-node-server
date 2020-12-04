const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    address: String,
    phoneNumber: Number,
    firstname: String,
    lastname: String,
    role: String,
    aboutMe: String,
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel"
    }],
    favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "RecipeModel"
    }]
}, {collection: "users"})

module.exports = usersSchema
