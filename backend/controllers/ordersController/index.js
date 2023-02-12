const {getOrders, getOrderById, getMyAllOrders} = require("./getOrders.controller")
const createOrder = require("./createOrder.controller")

module.exports = {getOrders, createOrder, getOrderById, getMyAllOrders}