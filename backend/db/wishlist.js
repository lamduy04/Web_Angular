const mongoose = require("mongoose");

const wishListSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    productsId: Array(String),
});

const Wishlist = mongoose.model("wishlists", wishListSchema);

module.exports = Wishlist;
