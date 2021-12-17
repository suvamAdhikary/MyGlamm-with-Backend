const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
    productId: {type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true},
    rating: {type: Number, required: true},
    comment: {type: String, required: false},
    date: {type: Date, default: Date.now},
}, {
    versionKey: false,
    timestamps: true,
});

const Review = mongoose.model('review', reviewSchema);

module.exports = Review;