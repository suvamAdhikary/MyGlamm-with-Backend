const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {type: String, required: true},
    subCategorys: [{type: mongoose.Schema.Types.ObjectId, ref: 'subcategory', required: false}],
    tags: [{type: mongoose.Schema.Types.ObjectId, ref: 'tag', required: false}],
    products: [{type: mongoose.Schema.Types.ObjectId, ref: 'product', required: false}],
}, {
    versionKey: false,
});

const Category = mongoose.model("category", categorySchema);

module.exports = Category;