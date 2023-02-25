const {Router} = require("express");
const { getOrders, createOrder, getOrderById, getMyAllOrders, deleteOrder, updateOrder } = require("../controllers/ordersController");
const roleChecker = require("../middlewares/role.middleware");

const orders = Router();

orders.get("/",roleChecker, getOrders);
orders.post("/create", createOrder);
orders.get("/my/order", getMyAllOrders);
orders.get("/:orderId", roleChecker, getOrderById);
orders.delete("/delete/:orderId",roleChecker, deleteOrder)
orders.patch("/update/:orderId", roleChecker, updateOrder)

module.exports = orders;