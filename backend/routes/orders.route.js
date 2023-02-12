const {Router} = require("express");
const { getOrders, createOrder, getOrderById, getMyAllOrders, deleteOrder, updateOrder } = require("../controllers/ordersController");
const roleChecker = require("../middlewares/role.middleware");

const orders = Router();

orders.get("/", roleChecker, getOrders);
orders.get("/:orderId", getOrderById);
orders.get("/my/order", getMyAllOrders);
orders.post("/create", createOrder);
orders.delete("/delete/:orderId", deleteOrder)
orders.patch("/update/:orderId", roleChecker, updateOrder)

module.exports = orders;