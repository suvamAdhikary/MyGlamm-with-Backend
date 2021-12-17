const mongoose = require('mongoose');

const wishlistSchema = mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
    productId: {type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true},
}, {
    versionKey: false,
    timestamp: true,
});

const Wishlist = mongoose.model("wishlist", wishlistSchema);

module.exports = Wishlist;