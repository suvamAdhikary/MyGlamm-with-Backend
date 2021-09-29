const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
    orderdAt: {type: Date, default: Date.now},
    paymentStatus: {type: String, required: true},
    status: {type: String, required:true},
    preTax: {type: Number, required: true},
    postTax: {type: Number, required: true},
    discount: {type: Number, required: true},
    afterDiscount: {type: Number, required: true},
    products: [{type: mongoose.Schema.Types.Subdocument, ref: 'bag', required: true}],
    shippingAddress: {type: mongoose.Schema.Types.Subdocument, ref: 'address', required: true},
    billingAddress: {type: mongoose.Schema.Types.Subdocument, ref: 'address', required: true},
    invoiceNo: {type: String, required: true},
    expectedDate: {type: String, required: false},
}, {
    versionKey: false,
    timestamp: true,
});

const Order = mongoose.model("order", orderSchema);

module.exports = Order;