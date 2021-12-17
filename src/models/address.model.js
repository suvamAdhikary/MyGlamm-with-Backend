const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
    full_name: {type: String, required: true},
    mobile: {type: Number, required: true, min: 1000000000, max: 9999999999, unique: true},
    email: {type: String, required: true},
    type: {type: String, required: true},
    houseNo: {type: String, required: true},
    streetName: {type: String, required: true},
    neighborhood: {type: String, required: true},
    pincode: {type: Number, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    landmark: {type: String, required: false},
    isDefault: {type: Boolean, required: false},
}, {
    versionKey: false,
    timestamp: true,
});

const Address = mongoose.model("address", addressSchema);

module.exports = Address;