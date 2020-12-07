const orderModel = require("../models/orders/orders.models.server")

const findAllOrders = () =>
    orderModel.find()

const createOrder = (newOrder) =>
    orderModel.create(newOrder)

module.exports ={
    findAllOrders,
    createOrder
}
