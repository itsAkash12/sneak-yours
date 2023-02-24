const {getProduct,getProductById} = require("./getProducts.controller");
const addProduct = require("./addProducts.controller")
const deleteProduct = require("./deleteProducts.controller")
const updateProduct = require("./deleteProducts.controller")

module.exports = {getProduct, getProductById, addProduct, deleteProduct, updateProduct};