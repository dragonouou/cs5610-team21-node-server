const orderModel = require("../models/orders/orders.models.server")

const findAllOrders = () =>
    orderModel.find()

const createOrder = (newOrder) =>
    orderModel.create(newOrder)

const deleteOrder = (orderId) =>
    orderModel.remove({_id:orderId})

module.exports ={
    findAllOrders,
    createOrder,
    deleteOrder
}
