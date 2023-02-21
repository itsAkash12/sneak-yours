const CartModel = require("../../models/cart.model");

const getCarts = async (req, res) => {
    const userId = req.userId;
    try {
      const cart = await CartModel.find({userId}).populate(["prodId"]);
      const cartCount = await CartModel.find({userId}).countDocuments();
      if(cart.length > 0){
        return res.send({cart, cartCount});
      }
      return res.send({
        message: "failed",
        description: "No item in the cart",
      });
    } catch (error) {
      res.send({
        message: "failed",
        description: error.message,
      });
    }
  };

module.exports = {
    getCarts
}