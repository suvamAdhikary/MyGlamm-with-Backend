const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    name: {type: String, required: true},
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'category', required: false},
    subCategory: {type: mongoose.Schema.Types.ObjectId, ref: 'subcategory', required: false},
    products: [{type: mongoose.Schema.Types.ObjectId, ref: 'products', required: false}],
}, {
    versionKey: false,
});

const Tag = mongoose.model("tag", tagSchema);

module.exports = Tag;