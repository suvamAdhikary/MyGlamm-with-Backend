const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema({
    name: {type: String, required: true},
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'category', required: false},
    tags: [{type: mongoose.Schema.Types.ObjectId, ref: 'tag', required: false}],
    products: [{type: mongoose.Schema.Types.ObjectId, ref: 'products', required: false}],
}, {
    versionKey: false,
});

const SubCategory = mongoose.model("subcategory", subCategorySchema);

module.exports = SubCategory;