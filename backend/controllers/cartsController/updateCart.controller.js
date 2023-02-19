const CartModel = require("../../models/cart.model");
const ProductModel = require("../../models/products.model");

const addQuantity = async (req, res) => {
  const prodId = req.params.id;
  const userId = req.userId;
  try {
    const product = await CartModel.findOne({ _id: prodId, userId });
    if (product) {
      const update = await CartModel.findByIdAndUpdate(
        { _id: product._id },
        { quantity: product.quantity + 1 }
      );
      return res.send({
        message: "updated",
        description: "Item count Updated +1",
      });
    } else {
      return res.send({
        message: "failed",
        description: "Product not available",
      });
    }
  } catch (error) {
    return res.send({
      message: "failed",
      description: error.message,
    });
  }
};

const removeQuantity = async (req, res) => {
  const prodId = req.params.id;
  const userId = req.userId;
  try {
    const product = await CartModel.findOne({ _id: prodId, userId });
    if (product) {
      if (product.quantity === 1) {
        const update = await CartModel.findByIdAndDelete({ _id: product._id });
        res.send({
            message: "updated",
          description: "Item Removed",
        })
      } else if (product.quantity > 1) {
        const update = await CartModel.findByIdAndUpdate(
          { _id: product._id },
          { quantity: product.quantity - 1 }
        );
        return res.send({
          message: "updated",
          description: "Item count Updated -1",
        });
      }
    } else {
      return res.send({
        message: "failed",
        description: "Product not available",
      });
    }
  } catch (error) {
    return res.send({
      message: "failed",
      description: error.message,
    });
  }
};

module.exports = { addQuantity, removeQuantity };
