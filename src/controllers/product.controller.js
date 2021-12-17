const express = require('express');

const router = express.Router();

const Product = require('../models/product.model');
const Category = require('../models/category.model');

const crudController = require('./crud.controller');

router.post('', crudController.post(Product));
router.get('', crudController.get(Product));
router.get('/:id', crudController.getOne(Product));
router.patch('/:id', crudController.updateOne(Product));
router.delete('/:id', crudController.deleteOne(Product));

// send to singel product page

// router.get('/:id', async (req, res) => {
    
//     try {
//         const product = await Product.findById(req.params.id).lean().exec();
//         const category = await Category.findById(product.categoryId).lean().exec();
//         res.render('pages/product.ejs', {
//             product: product,
//             category
//         });
//     } catch (err) {
//         return res.status(400).send({err})
//     }
// });

// router.get('/categories/:id', async (req, res) => {
    
//     try {
//         const category = await Product.find({categoryId: req.params.id}).lean().exec();
//         return res.send(category);
//         res.render('pages/category.ejs', {
//             category
//         });
//     } catch (err) {
//         return res.status(400).send({err})
//     }
// });

module.exports = router;