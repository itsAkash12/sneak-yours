const mongoose = require("mongoose")

const wishlistSchema = new mongoose.Schema({
    prodId:{type:mongoose.Schema.Types.ObjectId,required:true, ref:"products"},
    userId:{type:mongoose.Schema.Types.ObjectId, required:true, ref:"users"}
})

const WishlistModel = mongoose.model("wishlists", wishlistSchema);

module.exports = WishlistModel