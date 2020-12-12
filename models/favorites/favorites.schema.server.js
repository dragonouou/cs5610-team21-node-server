const mongoose = require('mongoose')
const favoriteSchema = mongoose.Schema({
    userId:String,
    favorites:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "RecipeModel"
    }],
}, {collection:'favorites'})
favoriteSchema.index({title:'text'})

module.exports = favoriteSchema
