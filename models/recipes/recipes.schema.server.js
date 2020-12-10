const mongoose = require('mongoose')
const recipeSchema = mongoose.Schema({
    title:String,
    summary:String,
    img:String,
    review:[String],
    chefId:String
}, {collection:'recipes'})
recipeSchema.index({title:'text'})

module.exports = recipeSchema
