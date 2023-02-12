const OrderModel = require("../../models/orders.model")

const deleteOrder = async(req, res)=> {
    const orderId = req.params.orderId
    try {
       const order = await OrderModel.find({_id:orderId, user:req.userId})
        if(order){
            await OrderModel.findByIdAndDelete({_id:orderId});
            res.send({
                message:"success",
                description:"Order deleted successfully"
            })
        }else{
            res.send({
                message:"failure",
                description:"Order not found"
            })
        }
    } catch (error) {
        res.send({
            message:"failure",
            description:error.message
        })
    }
}

module.exports = deleteOrder