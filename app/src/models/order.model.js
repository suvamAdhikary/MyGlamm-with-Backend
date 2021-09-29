const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
    orderdAt: {type: Date, default: Date.now},
    payment: {

    },
    products: [{type: mongoose.Schema.Types.Subdocument, ref: 'products', required: true}],
}, {
    versionKey: false,
    timestamp: true,
});

const Order = mongoose.model("order", orderSchema);

module.exports = Order;