const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required},
    type: {type: String, required: true},
    status: {type: String, required: true},
    cardType: {type: String, required: false},
    lastFourNumber: {type: String, required: false},
    expiryMonth: {type: Number, required: false},
    expiryYear: {type: Number, required: false},
    cvvVerified: {type: Boolean, required: false},
    token: {type: String, required: false},
}, {
    versionKey: false,
    timestamp: true,
})

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;