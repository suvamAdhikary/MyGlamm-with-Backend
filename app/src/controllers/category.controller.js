const express = require('express');

const router = express.Router();

const Category = require('../models/category.model');
const Product = require('../models/product.model');

const crudController = require('./crud.controller');

router.post('', crudController.post(Category));
router.get('', crudController.get(Category));
// router.get('/:id', crudController.getOne(Category));
router.patch('/:id', crudController.updateOne(Category));
router.delete('/:id', crudController.deleteOne(Category));


router.get('/:id', async (req, res) => {
    
    try {
        const category = await Category.findById(req.params.id).lean().exec();
        const productsid = [];
        category.productsId.forEach((product) => {
            productsid.push(product);
        })
        const products = await Product.find({_id: {$in: productsid}});
        
        res.render('pages/category.ejs', {
            category,
            products
        });
    } catch (err) {
        return res.status(400).send({err})
    }
});

router.get('/products/:id', async (req, res) => {
    
    try {
        const product = await Product.findById(req.params.id).lean().exec();
        const category = await Category.findById(product.categoryId).lean().exec();
        res.render('pages/product.ejs', {
            product: product,
            category
        });
    } catch (err) {
        return res.status(400).send({err})
    }
});


module.exports = router;