const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema({
    name: {type: String, required: true},
    display: {type: String, required: true},
    categoryId: {type: mongoose.Schema.Types.ObjectId, ref: 'category', required: false},
    tagsId: [{type: mongoose.Schema.Types.ObjectId, ref: 'tag', required: false}],
    productsId: [{type: mongoose.Schema.Types.ObjectId, ref: 'products', required: false}],
}, {
    versionKey: false,
});

const SubCategory = mongoose.model("subcategory", subCategorySchema);

module.exports = SubCategory;