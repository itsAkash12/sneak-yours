const WishlistModel = require("../../models/wishlist.model")

const deleteWishlist=async(req,res)=> {
    const wishId = req.params.id
    const userId = req.userId
    const wishlist = await WishlistModel.findById({_id:wishId})
    try {
        if(wishlist){
            await WishlistModel.findByIdAndDelete({_id:wishId, userId});
            return res.send({
                message:"success",
                description:"Removed from your Wishlist"
            })
        }else{
            return res.send({
                message:"failed",
                description:"Wishlist Item not available"
            })
        }
    } catch (error) {
        return res.send({
            message:"failed",
            description:error.message
        })
    }
}
module.exports = deleteWishlist