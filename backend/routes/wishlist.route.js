const {Router} = require("express");
const { getWishlist, createWishlist, deleteWishlist } = require("../controllers/wishlistsController");

const wishlists = Router();

wishlists.get("/", getWishlist);
wishlists.post("/create/:prodId", createWishlist);
wishlists.delete("/delete/:id", deleteWishlist)

module.exports = wishlists