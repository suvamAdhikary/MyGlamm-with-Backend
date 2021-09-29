const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    imagesLarge: [{type: String, required: true}],
    imagesSmall: [{type: String, required: true}],
    rating: {type: Number, required: true},
    ratings: {type: Number, required: true},
    categoryId: {type: mongoose.Schema.Types.ObjectId, ref: "category", required: true},
    subCategoryId: {type: mongoose.Schema.Types.ObjectId, ref: "subcategory", required: false},
    tagId: {type: mongoose.Schema.Types.ObjectId, ref: "tag", required: false},
}, {
    versionKey: false,
    timestamp: true,
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
