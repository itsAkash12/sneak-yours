const CartModel = require("../../models/cart.model");
const ProductModel = require("../../models/products.model");

const addCart = async (req, res) => {
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
    const isCartExist = await CartModel.findOne({ prodId, userId });
    if (!isCartExist) {
      const cart = await CartModel.create({ prodId, userId });
      return res.send({
        message: "success",
        description: "Product added to the cart",
      });
    } else {
      return res.send({
        message: "failed",
        description: "Product is already there",
      });
    }
  } catch (error) {
    res.send({
      message: "failed",
      description: error.message,
    });
  }
};

module.exports = { addCart };
