const WishlistModel = require("../../models/wishlist.model")

const deleteWishlist=async(req,res)=> {
    const wishId = req.params.id
    const userId = req.userId
    try {
        await WishlistModel.findByIdAndDelete({_id:wishId, userId});
        return res.send({
            message:"success",
            description:"Removed from your Cart"
        })
    } catch (error) {
        return res.send({
            message:"failed",
            description:error.message
        })
    }
}
module.exports = deleteWishlist