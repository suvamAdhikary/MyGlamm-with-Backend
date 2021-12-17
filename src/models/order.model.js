const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true,
};
const reqStringFalse = {
    type: String,
    required: false,
}
const reqNumber = {
    type: Number,
    required: true,
};

const productSchema = mongoose.Schema({
    name: reqString,
    quantity: reqNumber,
    unitPrice: reqNumber,
    ammount: reqNumber,
    image: reqString,
}, {
    versionKey: false,
});

const addressSchema = mongoose.Schema({
    shippingOrBilling: reqString,
    full_name: reqStringFalse,
    mobile: reqStringFalse,
    email: reqStringFalse,
    type: reqStringFalse,
    houseNo: reqStringFalse,
    streetName: reqStringFalse,
    neighborhood: reqStringFalse,
    pincode: reqStringFalse,
    city: reqStringFalse,
    state: reqStringFalse,
    landmark: reqStringFalse,
}, {
    versionKey: false,
});

const orderSchema = mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
    orderdAt: {type: Date, default: Date.now},
    paymentStatus: reqString,
    paymentMode: reqString,
    status: reqString,
    ammount: reqNumber,
    preTax: reqNumber,
    postTax: reqNumber,
    discount: reqNumber,
    products: [productSchema],
    shippingAddress: addressSchema,
    billingAddress: addressSchema,
    invoiceNo: reqString,
    expectedDate: {type: String, required: false},
}, {
    versionKey: false,
    timestamp: true,
});

const Order = mongoose.model("order", orderSchema);

module.exports = Order;