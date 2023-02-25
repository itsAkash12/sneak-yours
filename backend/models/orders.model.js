const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  prodId:{type:mongoose.Schema.Types.ObjectId, ref:"products", required:true},
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  orderCount:{ type: String, required:true },
  orderStatus: {
    type: String,
    required: true,
    default: "Processing",
  },
  deliveredAt: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
    firstname: { type: String, required:true },
    lastname: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    house: { type: String, required: true },
    postalcode: { type: Number, required: true },
    number: { type: Number, required: true },
});

const OrderModel = mongoose.model("orders", orderSchema);

module.exports = OrderModel;
