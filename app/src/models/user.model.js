const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    full_name: {type: String, required: true},
    email: {type: String, required: true},
}, {
    versionKey: false,
});

const User = mongoose