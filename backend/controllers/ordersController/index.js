const {getOrders, getOrderById, getMyAllOrders} = require("./getOrders.controller")
const createOrder = require("./createOrder.controller")
const deleteOrder = require("./deleteOrder")
const updateOrder = require("./updateOrder")

module.exports = {getOrders, createOrder, getOrderById, getMyAllOrders, deleteOrder, updateOrder}