const express = require('express');

const router = express.Router();

const Order = require('../models/order.model');
const User = require('../models/user.model');
const Address = require('../models/address.model');
const Bag = require('../models/bag.model');
const Product = require('../models/product.model');

const crudController = require('./crud.controller');

// router.post('', crudController.post(Order));
router.get('', crudController.get(Order));
router.get('/:id', crudController.getOne(Order));
router.patch('/:id', crudController.updateOne(Order));
router.delete('/:id', crudController.deleteOne(Order));

// router.post('', async (req, res)=> {
//     let userId = req.body.user.userId;
//     try {
//         let user = await User.findById(userId).lean().exec();
//         let address = await Address.findOne({userId}).lean().exec();
//         let bag = await Bag.find({userId}).lean().exec();
//         let productsId = [];
//         bag.forEach(({productId:id})=>{
//             productsId.push(id);
//         })
//         let products = await Product.find({_id: {$in: productsId}}).lean().exec();
//         let body = JSON.stringify({
//             userId,
//             orderdAt: {type: Date, default: Date.now},
//             paymentStatus: "PAID",
//             paymentMode: "CARD",
//             status: "On Packaging",
//             ammount: user.totalPrice,
//             preTax: user.totalPrice,
//             postTax: user.totalPrice,
//             discount: 00,
//             products: products,
//             shippingAddress: address,
//             billingAddress: address,
//             invoiceNo: "hfuief678",
//         })
//         const order = await Order.create(body);
//         res.status(200).send(order);
//     } catch (err) {
//         res.send(err);
//     }
// })


module.exports = router;