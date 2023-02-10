const UserModel = require("../models/users.model");
const ProductModel = require("../models/products.model");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dyv0uxpi2",
  api_key: "771656121491761",
  api_secret: "05-YkXiWK0lDwzEe1JKpxaqbYKw",
});

// USERS RELATED OPERATIONS
const getUsers = async (id) => {
  if (!id) {
    const user = await UserModel.find();
    return user;
  } else {
    const user = await UserModel.findById({ _id: id });
    if (user) {
      return user;
    } else {
      return {
        message: "failure",
        description: "Can't Find the PRoduct With this ID",
      };
    }
  }
};

const deleteUser = async (id) => {
  if (!id) {
    return {
      message: "failed Request",
      description: "Can't able to delete the User",
    };
  } else {
    const userId = await UserModel.findById({ _id: id });
    if (userId) {
      await UserModel.findByIdAndDelete({ _id: id });
      return {
        message: "success",
        description: "User Deleted Successfully",
      };
    } else {
      return {
        message: "failed Request",
        description: "Can't able to delete the User",
      };
    }
  }
};

// PRODUCT RELATED OPERATIONS
const getProducts = async (id) => {
  if (!id) {
    const product = await ProductModel.find();
    return product;
  } else {
    const product = await ProductModel.findById({ _id: id });
    if (product) {
      return product;
    } else {
      return {
        message: "failure",
        description: "Can't Find the PRoduct With this ID",
      };
    }
  }
};

const createProduct = async (photos,payload) => {
  let photoArray = [];
  if (photos) {
    for (let i = 0; i < photos.length; i++) {
      let result = await cloudinary.uploader.upload(
        photos[i].tempFilePath,
        { timeout: 40000 },
        (err) => {
          if (err) {
            return (err);
          }
        }
      );
      photoArray.push({
        url: result.secure_url,
      });
      if (photoArray.length == 5) {
        const product = new ProductModel({...payload, images:photoArray})
        await product.save();
        return ({
          message: "success",
          description: "Successfully added the Products",
        });
      }else{
        return {
          message: "failed Request",
          description: "Can't able to perform this operation",
        };
      }
    }
  }else{
    return {
      message: "failed Request",
      description: "Can't able to Perform this Operation",
    };
  }
};

const deleteProduct = async (id) => {
  if (!id) {
    return {
      message: "failed Request",
      description: "Can't able to delete the Product",
    };
  } else {
    const productId = await ProductModel.findById({ _id: id });
    if (productId) {
      await ProductModel.findByIdAndDelete({ _id: id });
      return {
        message: "success",
        description: "Product Deleted Successfully",
      };
    } else {
      return {
        message: "failed Request",
        description: "Can't able to delete the Product",
      };
    }
  }
};

module.exports = {
  getUsers,
  deleteUser,
  getProducts,
  createProduct,
  deleteProduct,
};
