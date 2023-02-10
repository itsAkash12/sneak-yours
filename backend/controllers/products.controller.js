const ProductModel = require("../models/products.model");


const getProduct = async(id)=> {
    if(!id){
        const product = await ProductModel.find();
        return product;
    }else{
        const product = await ProductModel.findById({_id:id});
        if(product){
            return product;
        }else{
            return {
                message:"failed request", description:`Product with ${id} is not found`
            }
        }
    }

}

module.exports = {getProduct};