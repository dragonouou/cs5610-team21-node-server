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

    const deleteOrder = (req, res) => {
        orderService.deleteOrder(req.params.orderId)
            .then(status => res.send(status))
    }

    app.get("/api/orders",findAllOrders)
    app.post("/api/orders",createOrder)
    app.delete("/api/orders/:orderId",deleteOrder)
}



