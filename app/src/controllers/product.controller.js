const express = require('express');

const router = express.Router();

const Product = require('../models/product.model');

const crudController = require('./crud.controller');

router.post('', crudController.post(Product));
router.get('', crudController.get(Product));
// router.get('/:id', crudController.getOne(Product));
router.patch('/:id', crudController.updateOne(Product));
router.delete('/:id', crudController.deleteOne(Product));

// send to singel product page

router.get('/:id', async (req, res) => {
    
    try {
        const product = await Product.findById(req.params.id).lean().exec();
        
        res.render('pages/product.ejs', {
            product: product,
        });
    } catch (err) {
        return res.status(400).send({err})
    }
});


module.exports = router;