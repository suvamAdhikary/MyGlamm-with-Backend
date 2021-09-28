const mongoose = require('mongoose');

const bagSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
    product: {type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true},
    quantity: {type: Number, required: true},
}, {
    versionKey: false,
    timestamp: true,
});

const Bag = mongoose.model("bag", bagSchema);

module.exports = Bag;