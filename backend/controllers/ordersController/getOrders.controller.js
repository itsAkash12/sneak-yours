const OrderModel = require("../../models/orders.model");

// For Admin
const getOrders = async (req, res) => {
  try {
    const order = await OrderModel.find();
    res.send(order);
  } catch (error) {
    res.send({
      message: "failed request",
      description: error.message,
    });
  }
};

//For user with certain Order ID
const getOrderById = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const order = await OrderModel.findById({ _id: orderId });
    res.send(order);
  } catch (error) {
    res.send({
      message: "failed request",
      description: error.message,
    });
  }
};

// All orders of a single User
const getMyAllOrders = async(req, res)=> {
    const userId = req.userId;
    try {
        const orders = await OrderModel.find({userId});
        res.send(orders);
    } catch (error) {
        res.send({
            message: "failed request",
            description: error.message,
          });
    }
}

module.exports = { getOrders, getOrderById, getMyAllOrders };
