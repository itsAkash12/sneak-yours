const {getCarts} = require("./getCart.controller");
const {addCart} = require("./addCart.controller");
const {deleteCart} = require("./deleteCart.controller");
const {addQuantity, removeQuantity} = require("./updateCart.controller")

module.exports = {
    getCarts,
    addCart,
    deleteCart,
    addQuantity,
    removeQuantity
}