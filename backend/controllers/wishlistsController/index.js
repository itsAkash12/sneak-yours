const createWishlist = require("./create.controller")
const getWishlist = require("./get.controller")
const deleteWishlist = require("./delete.controller")

module.exports = {
    getWishlist,
    createWishlist,
    deleteWishlist
}