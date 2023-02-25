const ProductModel = require("../../models/products.model");

const getProduct = async (req, res) => {
  const { id } = req.params;
  const { gender, page = 1, sort, find, brand, category, colors, min, max } = req.query;
//   const { gender } = req.params;
  let product;
  try {
    product = await ProductModel.find()
      .limit(12)
      .skip((page - 1) * 12);
    if (sort) {
      product = await ProductModel.find()
        .sort(sort == "price_low" ? { price: 1 } : { price: -1 })
        .limit(12)
        .skip((page - 1) * 12);
    }
    if (gender) {
      if (gender == "men") {
        product = await ProductModel.find({ subtitle: "Men's Shoes" })
          .limit(12)
          .skip((page - 1) * 12);
      } else {
        product = await ProductModel.find({ subtitle: "Women's Shoes" })
          .limit(12)
          .skip((page - 1) * 12);
      }
    }
    if (gender && sort) {
      if (gender == "men") {
        product = await ProductModel.find({ subtitle: "Men's Shoes" })
          .limit(12)
          .skip((page - 1) * 12)
          .sort(sort == "price_low" ? { price: 1 } : { price: -1 });
      } else {
        product = await ProductModel.find({ subtitle: "Women's Shoes" })
          .limit(12)
          .skip((page - 1) * 12)
          .sort(sort == "price_low" ? { price: 1 } : { price: -1 });
      }
    }
    if (gender && colors) {
      if (gender == "men") {
        product = await ProductModel.find({ subtitle: "Men's Shoes" })
          .and([{ colors: { $regex: colors, $options: "i" } }])
          .limit(12)
          .skip((page - 1) * 12);
      } else {
        product = await ProductModel.find({ subtitle: "Women's Shoes" })
          .and([{ colors: { $regex: colors, $options: "i" } }])
          .limit(12)
          .skip((page - 1) * 12);
      }
    }
    if (gender && colors && sort) {
      if (gender == "men") {
        product = await ProductModel.find({ subtitle: "Men's Shoes" })
          .and([{ colors: { $regex: colors, $options: "i" } }])
          .limit(12)
          .skip((page - 1) * 12)
          .sort(sort == "price_low" ? { price: 1 } : { price: -1 });
      } else {
        product = await ProductModel.find({ subtitle: "Women's Shoes" })
          .and([{ colors: { $regex: colors, $options: "i" } }])
          .limit(12)
          .skip((page - 1) * 12)
          .sort(sort == "price_low" ? { price: 1 } : { price: -1 });
      }
    }
    if (find) {
      product = await ProductModel.find()
        .or([
          { product_title: { $regex: find, $options: "i" } },
          { description: { $regex: find, $options: "i" } },
        ])
        .limit(12)
        .skip((page - 1) * 12);
    }
    if (find && sort) {
      product = await ProductModel.find()
        .or([
          { product_title: { $regex: find, $options: "i" } },
          { description: { $regex: find, $options: "i" } },
        ])
        .limit(12)
        .skip((page - 1) * 12)
        .sort(sort == "price_low" ? { price: 1 } : { price: -1 });
    }
    if (brand) {
      product = await ProductModel.find({
        brand: { $regex: brand, $options: "i" },
      })
        .limit(12)
        .skip((page - 1) * 12);
    }
    if (brand && sort) {
      product = await ProductModel.find({
        brand: { $regex: brand, $options: "i" },
      })
        .limit(12)
        .skip((page - 1) * 12)
        .sort(sort == "price_low" ? { price: 1 } : { price: -1 });
    }
    if (colors) {
      product = await ProductModel.find({
        colors: { $regex: colors, $options: "i" },
      })
        .limit(12)
        .skip((page - 1) * 12);
    }
    if (colors && sort) {
      product = await ProductModel.find({
        colors: { $regex: colors, $options: "i" },
      })
        .limit(12)
        .skip((page - 1) * 12)
        .sort(sort == "price_low" ? { price: 1 } : { price: -1 });
    }
    if (brand && colors) {
      product = await ProductModel.find()
        .and([
          { colors: { $regex: colors, $options: "i" } },
          { brand: { $regex: brand, $options: "i" } },
        ])
        .limit(12)
        .skip((page - 1) * 12);
    }
    if (brand && colors && sort) {
      product = await ProductModel.find()
        .and([
          { colors: { $regex: colors, $options: "i" } },
          { brand: { $regex: brand, $options: "i" } },
        ])
        .limit(12)
        .skip((page - 1) * 12)
        .sort(sort == "price_low" ? { price: 1 } : { price: -1 });
    }
    if (category) {
      product = await ProductModel.find({
        category: { $regex: category, $options: "i" },
      })
        .limit(12)
        .skip((page - 1) * 12);
    }
    if (category && sort) {
      product = await ProductModel.find({
        category: { $regex: category, $options: "i" },
      })
        .limit(12)
        .skip((page - 1) * 12)
        .sort(sort == "price_low" ? { price: 1 } : { price: -1 });
    }
    if (category && colors) {
      product = await ProductModel.find()
        .and([
          { colors: { $regex: colors, $options: "i" } },
          { category: { $regex: category, $options: "i" } },
        ])
        .limit(12)
        .skip((page - 1) * 12);
    }
    if (category && colors && sort) {
      product = await ProductModel.find()
        .and([
          { colors: { $regex: colors, $options: "i" } },
          { category: { $regex: category, $options: "i" } },
        ])
        .limit(12)
        .skip((page - 1) * 12)
        .sort(sort == "price_low" ? { price: 1 } : { price: -1 });
    }
    if (min && max) {
      product = await ProductModel.find({
        price: { $lte: max },
        price: { $gte: min },
      });
    }
    let productCount = 0;
    for(let i=0; i<product.length; i++){
      productCount++;
    }
    return res.send({product,productCount});
  } catch (error) {
    res.send({
      message: "failed",
      description: error.message,
    });
  }
};
const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductModel.findById({ _id: id });
    if (product) {
      return res.send(product);
    } else {
      return res.send({
        message: "failed",
        description: `Product with ${id} is not found`,
      });
    }
  } catch (error) {
    res.send({
      message: "failed",
      description: error.message,
    });
  }
};

module.exports = { getProduct, getProductById };
