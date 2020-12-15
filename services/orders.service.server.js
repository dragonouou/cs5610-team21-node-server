const orderDao = require("../daos/orders.dao.server")

const findAllOrders = () =>
    orderDao.findAllOrders()

const createOrder = (newOrder) =>
    orderDao.createOrder(newOrder)

const deleteOrder = (orderId) =>
    orderDao.deleteOrder(orderId)

module.exports = {
    findAllOrders,
    createOrder,
    deleteOrder
}
