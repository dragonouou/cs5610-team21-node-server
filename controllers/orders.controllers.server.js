const orderService = require("../services/orders.service.server")

module.exports = (app) => {
    const findAllOrders = (req, res) => {
        orderService.findAllOrders()
            .then(orders => res.send(orders))
    }

    const createOrder = (req, res) => {
        orderService.createOrder(req.body)
            .then(actualOrder => res.send(actualOrder))
    }

    app.get("/api/orders",findAllOrders)
    app.post("/api/orders",createOrder)
}



