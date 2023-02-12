const OrderModel = require("../../models/orders.model");

const createOrder = async (req, res) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  try {
    const order = new OrderModel({
      shippingInfo,
      orderItems,
      paymentInfo,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      paidAt: Date.now(),
      user: req.userId,
    });
    await order.save();
    res.status(201).send({
      message: "successs",
      order,
    });
  } catch (error) {
    res.send({
      message: "failure",
      description: error.message,
    });
  }
};


module.exports = createOrder;