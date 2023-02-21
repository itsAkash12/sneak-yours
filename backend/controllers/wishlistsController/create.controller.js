const ProductModel = require("../../models/products.model");
const WishlistModel = require("../../models/wishlist.model");

const createWishlist = async (req, res) => {
  const userId = req.userId;
  const prodId = req.params.prodId;
  try {
    const product = await ProductModel.findById({ _id: prodId });
    if (!product) {
      return res.status(404).send({
        message: "failed",
        description: "Can't find product",
      });
    }
    const isExist = await WishlistModel.findOne({ prodId, userId });
    if (!isExist) {
      const wishlist = await WishlistModel.create({ prodId, userId });
      return res.send({
        message: "success",
        description: "Product added to your wishlist",
      });
    } else {
      return res.send({
        message: "failed",
        description: "Product is already there in your wishlist",
      });
    }
  } catch (error) {
    res.send({
      message: "failed",
      description: error.message,
    });
  }
};
module.exports = createWishlist;
