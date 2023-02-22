const WishlistModel = require("../../models/wishlist.model");

const getWishlist= async(req,res)=> {
    const userId = req.userId;
    try {
      const wishlist = await WishlistModel.find({userId}).populate(["prodId"]);
      const wishlistCount = await WishlistModel.find({userId}).countDocuments();
      if(wishlist.length > 0){
        return res.send({wishlist, wishlistCount});
      }
      return res.send({
        message: "failed",
        description: "No item in the wishlist",
      });
    } catch (error) {
      res.send({
        message: "failed",
        description: error.message,
      });
    }
}

module.exports = getWishlist