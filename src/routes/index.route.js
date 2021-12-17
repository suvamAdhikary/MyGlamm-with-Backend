const express = require('express');

const router = express.Router();

const Product = require('../models/product.model');

const crudController = require('../controllers/crud.controller');

router.get('', async (req, res) => {

    try {
        const products = await Product.find().lean().exec();

        res.render('index.ejs', {
            products
        })
    } catch (err) {
        return res.status(400).send({err});
    };
});

module.exports = router;