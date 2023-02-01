const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_title: { type: String, required: true },
  images: [{ url: { type: String, required: true } }],
  subtitle: { type: String, required: true },
  price: { type: Number, required: true },
  colors: { type: String, required: true },
  quantity: { type: Number},
  status:{type:Boolean, default:true},
  description: { type: String, required: true },
  seller_name: { type: String },
  seller_address: { type: String },
  discount: { type: Number },
  category: { type: String, required: true },
  brand: { type: String, required: true },
  deliverytime: { type: String },
});

const ProductModel = mongoose.model("products", productSchema);

module.exports = ProductModel;
