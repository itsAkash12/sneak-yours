require("dotenv").config();
const ProductModel = require("../../models/products.model");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});
const addProduct = async (req, res) => {
  const photos = [...req.files.images];
  let photoArray = [];
  const {
    product_title,
    subtitle,
    price,
    colors,
    quantity,
    description,
    seller_name,
    seller_address,
    discount,
    category,
    brand,
    deliverytime,
  } = req.body;

  try {
    for (let i = 0; i < photos.length; i++) {
      let result = await cloudinary.uploader.upload(
        photos[i].tempFilePath,
        { timeout: 40000 },
        (err) => {
          if (err) {
            return res.send(err);
          }
        }
      );
      photoArray.push({
        url: result.secure_url,
      });
    }
    const product = new ProductModel({
      product_title,
      images: photoArray,
      subtitle,
      price,
      colors,
      quantity,
      description,
      seller_name,
      seller_address,
      discount,
      category,
      brand,
      deliverytime,
    });
    await product.save();
    return res.send(product);
  } catch (error) {
    res.send({
      message: "failed",
      description: error.message,
    });
  }
};

module.exports = addProduct;
