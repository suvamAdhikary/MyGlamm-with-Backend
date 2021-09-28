const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema({
    name: {type: String, required: true},
}, {
    versionKey: false,
});

const SubCategory = mongoose.model("subcategory", subCategorySchema);

module.exports = SubCategory;