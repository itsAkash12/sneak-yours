const ProductModel = require("../../models/products.model")
const UserModel = require("../../models/users.model");
const OrderModel = require("../../models/orders.model")


const getProductsAdmin = async(req,res)=> {
    try {
        let products = await ProductModel.find();
        let productsCount = await ProductModel.find().countDocuments();

        res.send({products, productsCount})
    } catch (error) {
        res.send({message:"failed", description:error.message});
    }
}

const getOrdersAdmin = async(req,res) => {
    try {
        let orders = await OrderModel.find().populate(["prodId"]);
        let ordersCount = await OrderModel.find().countDocuments();

        res.send({orders, ordersCount})
    } catch (error) {
        res.send({message:"failed", description:error.message});
    }
}

const getUsersAdmin = async(req,res) => {
    try {
        let users = await UserModel.find();
        let usersCount = await UserModel.find().countDocuments();

        res.send({users, usersCount})
    } catch (error) {
        res.send({message:"failed", description:error.message});
    }
}

module.exports = {getOrdersAdmin,getProductsAdmin,getUsersAdmin};