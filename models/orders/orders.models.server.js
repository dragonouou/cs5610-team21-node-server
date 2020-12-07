const mongoose = require('mongoose')
const orderSchema = require('./orders.schema.server')
const orderModel = mongoose.model('OrderModel',orderSchema)
module.exports = orderModel
