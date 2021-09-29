const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    mobile: {type: Number, required: true, min: 1000000000, max: 9999999999, unique: true},
    full_name: {type: String, required: true},
    email: {type: String, required: true},
    registeredAt: {type: Date, default: Date.now},
}, {
    versionKey: false,
});

const User = mongoose.model('user', userSchema);

module.exports = User;