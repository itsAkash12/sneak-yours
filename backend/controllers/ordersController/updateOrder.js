const OrderModel = require("../../models/orders.model")

const updateOrder = async(req, res)=> {
    const orderId = req.params.orderId
    const payload = req.body;
    try {
        const order = OrderModel.findById({_id:orderId});
        if(order){
            const updatedOrder = await OrderModel.findByIdAndUpdate({_id:orderId}, payload);
            res.send({
                message:"success",
                description:"Updated Successfully"
            })
        }else{
            res.send({
                message:"success",
                description:"Order with the id is not available"
            })
        }
    } catch (error) {
        res.send({
            message:"success",
            description:error.message
        })
    }
}

module.exports = updateOrder