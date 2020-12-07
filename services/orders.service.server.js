const orderDao = require("../daos/orders.dao.server")

const findAllOrders = () =>
    orderDao.findAllOrders()

const createOrder = (newOrder) =>
    orderDao.createOrder(newOrder)

module.exports = {
    findAllOrders,
    createOrder
}
