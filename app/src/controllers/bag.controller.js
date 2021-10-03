const express = require('express');

const router = express.Router();

const Bag = require('../models/bag.model');
const User = require('../models/user.model');
const Product = require('../models/product.model');
const Address = require('../models/address.model');

const crudController = require('./crud.controller');

router.post('', crudController.post(Bag));
router.get('', crudController.get(Bag));
router.get('/:id', crudController.getOne(Bag));
router.patch('/:id', crudController.updateOne(Bag));
router.delete('/:id', crudController.deleteOne(Bag));

// for cart
router.get('/user/:userId', async (req, res)=> {
    console.log("in bag......");
    try {
        let productsId = [];
        let bag = await Bag.find({$and: [{userId: req.params.userId}]}).lean().exec();
        let user = await User.findById(req.params.userId).lean().exec();
        bag.forEach(({productId:id})=>{
            productsId.push(id);
        })
        let products = await Product.find({$in: {_id: productsId}}).lean().exec();
        console.log("bag :", bag, "user :", user, productsId, products);
        // res.send({products});
        res.render('pages/bag.ejs', {
            bag,
            products,
            user
        })
    }catch(err){
        res.send(err);
    }
})

// for checkout
router.get('/checkout/:userId', async(req, res)=> {
    console.log("inCheckout");
    try{
        let productsId = [];
        let bag = await Bag.find({$and: [{userId: req.params.userId}]}).lean().exec();
        let user = await User.findById(req.params.userId).lean().exec();
        let address = await Address.findOne({userId: req.params.userId}).lean().exec();
        bag.forEach(({productId:id})=>{
            productsId.push(id);
        })
        let products = await Product.find({_id: {$in: productsId}}).lean().exec();
        console.log("inCheckoutBag :", bag, "user :", user, productsId, products, address);
        console.log(bag.length, products.length);
        res.render('pages/checkout.ejs', {
            bag,
            products,
            user,
            address
        })
    } catch(err) {
        res.send(err);
    }
    // res.render('pages/checkout.ejs')
})

module.exports = router;