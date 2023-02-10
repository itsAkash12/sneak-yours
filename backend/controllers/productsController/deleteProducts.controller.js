const ProductModel = require("../../models/products.model");

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    if (!id) {
      return res.send({
        message: "failed Request",
        description: "Can't able to delete the Product",
      });
    } else {
      const productId = await ProductModel.findById({ _id: id });
      if (productId) {
        await ProductModel.findByIdAndDelete({ _id: id });
        return res.send({
          message: "success",
          description: "Product Deleted Successfully",
        });
      } else {
        return res.send({
          message: "failed Request",
          description: "Can't able to delete the Product",
        });
      }
    }
  } catch (error) {
    res.send({
        message: "failed Request",
        description: error.message,
      })
  }
};
module.exports = deleteProduct;
