const { Router } = require("express");
const { getProduct, addProduct, deleteProduct, updateProduct } = require("../controllers/productsController");
const roleChecker = require("../middlewares/role.middleware")

const products = Router();

products.get("/", getProduct);
products.post("/add", roleChecker, addProduct)
products.get("/:id", getProduct);
products.delete("/delete/:id", roleChecker, deleteProduct)
products.patch("/update/:id", roleChecker, updateProduct);

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
