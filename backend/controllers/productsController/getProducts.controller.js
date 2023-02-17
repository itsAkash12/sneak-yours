const ProductModel = require("../../models/products.model");

const getProduct = async(req, res)=> {
    const {id} = req.params
    const {page=1} = req.query 
    try {
        if(!id){
            const product = await ProductModel.find().limit(12).skip((page-1)*12);
            return res.send(product);
        }else{
            const product = await ProductModel.findById({_id:id});
            if(product){
                return res.send(product);
            }else{
                return res.send({
                    message:"failed request", description:`Product with ${id} is not found`
                })
            }
        }
    } catch (error) {
        res.send({
            message:"failed request", description:error.message
        })
    }
}

module.exports = getProduct