const mongoose = require('mongoose');

const mobileSchema = new mongoose.Schema({
    countryCode: {type: Number, required: true},
    mobile: {type: Number, required: true, min: 1000000000, max: 9999999999, unique: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: false}
}, {
    versionKey: false,
    timestamps: true,
})

const Mobile = mongoose.model('mobile', mobileSchema);

module.exports = Mobile;