const OrderModel = require("../../models/orders.model");
const CartModel = require("../../models/cart.model")

const createOrder = async (req, res) => {
  const {firstname,lastname,address,city,state,house,postalcode,number}=req.body
  const userId = req.userId;
  try {
    const cart = await CartModel.find({ userId });
    if (cart.length === 0) {
      res.status(401).send({ message:"failed", description:"Your Cart Is Empty" });
    } else {
      for(let i=0; i<cart.length; i++){
        await OrderModel.insertMany({userId:cart[i].userId, prodId:cart[i].prodId, orderCount:cart[i].quantity, firstname,lastname,address,city,state,house,postalcode,number});
      }
      await CartModel.deleteMany({ userId });
      res.send({ message:"success", description:"Purchase Successfull" });
    }
  } catch (error) {
    res.send({
      message: "failed",
      description: error.message,
    });
  }
};


module.exports = createOrder;