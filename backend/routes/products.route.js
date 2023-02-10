const { Router } = require("express");
const { getProduct } = require("../controllers/products.controller");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dyv0uxpi2",
  api_key: "771656121491761",
  api_secret: "05-YkXiWK0lDwzEe1JKpxaqbYKw",
});

const products = Router();

products.get("/", async(req, res) => {
  try {
    const result = await getProduct();
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
});

products.get("/:id", async(req, res) => {
  const {id} = req.params;
  try {
    const result = await getProduct(id);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

// products.post("/add", async (req, res) => {
//   const photos = [...req.files.images];
//   let photoArray = [];
//   const {
//     product_title,
//     subtitle,
//     price,
//     colors,
//     quantity,
//     description,
//     seller_name,
//     seller_address,
//     discount,
//     category,
//     brand,
//     deliverytime,
//   } = req.body;
  
//   try {
//     for (let i = 0; i < photos.length; i++) {
//       let result = await cloudinary.uploader.upload(photos[i].tempFilePath, {timeout:40000}, (err) => {
//         if (err) {
//           return res.send(err);
//         }
//       });
//       photoArray.push({
//         url: result.secure_url,
//       });
//     }
//     const product = new ProductModel({
//       product_title,
//       images:photoArray,
//       subtitle,
//       price,
//       colors,
//       quantity,
//       description,
//       seller_name,
//       seller_address,
//       discount,
//       category,
//       brand,
//       deliverytime,
//     });
//     await product.save();
//     return res.send(product)
//   } catch (error) {
//     res.send(error.message);
//   }
// });

module.exports = products;
