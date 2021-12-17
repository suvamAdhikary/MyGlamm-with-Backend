const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {type: String, required: true},
    subCategorysId: [{type: mongoose.Schema.Types.ObjectId, ref: 'subcategory', required: false}],
    tagsId: [{type: mongoose.Schema.Types.ObjectId, ref: 'tag', required: false}],
    productsId: [{type: mongoose.Schema.Types.ObjectId, ref: 'product', required: false}],
}, {
    versionKey: false,
});

const Category = mongoose.model("category", categorySchema);

module.exports = Category;