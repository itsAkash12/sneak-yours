const CartModel = require("../../models/cart.model")

const deleteCart = async(req,res)=> {
    const cartId = req.params.id
    const cart = await CartModel.findById({_id:cartId});
    try {
        if(cart){
            const user = cart.userId;
            if(user==req.userId){
                const deletedCart = await CartModel.findByIdAndDelete({_id:cartId});
                return res.send({
                    message:"success",
                    description:"Successfully remove from Cart"
                });
            }
            return res.send({
                message:"failed",
                description:"can't delete the cart"
            })
        }else{
            return res.send({
                message:"failed",
                description:"Cart Item not available"
            })
        }
    } catch (error) {
        return res.send({
            message:"failed",
            description:error.message
        })
    }
}

module.exports = {deleteCart}