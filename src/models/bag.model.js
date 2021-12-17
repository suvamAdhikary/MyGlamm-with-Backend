const mongoose = require('mongoose');

const bagSchema = mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
    productId: {type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    xoPoint: {type:Number, required: false},
    quantity: {type: Number, required: true},
    addedAt: {type: Date, default: Date.now},
}, {
    versionKey: false,
    timestamp: true,
});

const Bag = mongoose.model("bag", bagSchema);

module.exports = Bag;