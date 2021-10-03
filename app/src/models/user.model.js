const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    full_name: {type: String, required: true},
    email: {type: String, required: true},
    mobileId: {type: mongoose.Schema.Types.ObjectId, ref: 'mobile', required: true},
    address: [{type: mongoose.Schema.Types.ObjectId, ref: 'address', required: false}],
    logStatus: {type: Boolean, required: false},
    membershipLevel: {type: String, required: false},
    glamPoint: {type: Number, required: false},
    bagId: [{type: mongoose.Schema.Types.ObjectId, ref: 'bag', required: false}],
    totalItemsInBag: {type: Number, required: false, default: 0},
    totalPrice: {type: Number, required: false, default: 0},
    xoPoint: {type: Number, required: false, default: 0},
    wishlistId: [{type: mongoose.Schema.Types.ObjectId, ref: 'wishlist', required: false}],
}, {
    versionKey: false,
    timestamps: true,
});

const User = mongoose.model('user', userSchema);

module.exports = User;