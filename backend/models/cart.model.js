const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  prodId:{type: mongoose.Schema.Types.ObjectId, required: true, ref:"products"},
  quantity: { type: Number, default: 1},
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref:"users" },
});

const CartModel = mongoose.model("carts", cartSchema);

module.exports = CartModel;
