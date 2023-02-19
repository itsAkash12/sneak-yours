const {Router} = require("express");
const { getCarts, addCart, deleteCart, addQuantity, removeQuantity } = require("../controllers/cartsController");
const carts = Router();

carts.get("/", getCarts)
carts.post("/create/:prodId", addCart)
carts.delete("/delete/:id", deleteCart)
carts.patch("/quantity/inc/:id", addQuantity)
carts.patch("/quantity/dec/:id", removeQuantity)

module.exports = carts;