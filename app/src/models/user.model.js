const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    countryCode: {type: Number, required: true},
    mobile: {type: Number, required: true, min: 1000000000, max: 9999999999, unique: true},
    full_name: {type: String, required: true},
    email: {type: String, required: true},
    registeredAt: {type: Date, default: Date.now},
    logStatus: {type: Boolean, required: true},
    membershipLevel: {type: String, required: false},
    glamPoint: {type: Number, required: false},
    bagId: [{type: mongoose.Schema.Types.ObjectId, ref: 'bag', required: false}],
    totalItemsInBag: {type: Number, required: false},
    totalPrice: {type: Number, required: false},
    xoPoint: {type: Number, required: false},
    wishlistId: [{type: mongoose.Schema.Types.ObjectId, ref: 'wishlist', required: false}],
}, {
    versionKey: false,
    timestamps: true,
});

const User = mongoose.model('user', userSchema);

module.exports = User;