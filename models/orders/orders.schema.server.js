const mongoose = require('mongoose')
const orderSchema = mongoose.Schema({
    recipes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'RecipeModel'
    }],
    date: Date,
}, {collection:'orders'})

module.exports = orderSchema
