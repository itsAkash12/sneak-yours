const OrderModel = require("../../models/orders.model");

// For Admin
const getOrders = async (req, res) => {
  const {page} = req.query;
  try {
    const order = await OrderModel.find().populate([
      "prodId",
    ]).limit(12)
    .skip((page - 1) * 12);
    let orderCount=0;
    for(let i=0; i<order.length; i++){
      orderCount++;
    };
    res.send({order, orderCount});
  } catch (error) {
    res.send({
      message: "failed",
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
      message: "failed",
      description: error.message,
    });
  }
};

// All orders of a single User
const getMyAllOrders = async(req, res)=> {
  const userID = req.userID;
  try {
    const order = await OrderModel.find({ userID }).populate([
      "prodId",
    ]);
    if (order.length > 0) {
      res.send(order);
    } else {
      res.send({ message:"failed", description:"You Don't Have any Orders at the moment" });
    }
  } catch (error) {
    res
      .status(401)
      .send({ message:"failed", description:error.message });
  }
}

module.exports = { getOrders, getOrderById, getMyAllOrders };
