const mongoose = require('mongoose')
const recipeSchema = mongoose.Schema({
    title:String,
    summary:String,
    imageURL:String,
    review:[String],
    chefId:String
}, {collection:'recipes'})

module.exports = recipeSchema


