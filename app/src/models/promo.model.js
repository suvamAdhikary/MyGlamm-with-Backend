const mongoose = require('mongoose');

const promoSchema = mongoose.Schema({
    code: {type: String, required: true},
    ammount: {type: Number, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: false},
}, {
    versionKey: false,
    timestamp: true,
});

const Promo = mongoose.model("promo", promoSchema);

module.exports = Promo;