const express = require('express');

const router = express.Router();

const Payment = require('../models/payment.model');
const User = require('../models/user.model');
const Order = require('../models/order.model');

const crudController = require('./crud.controller');

router.post('', crudController.post(Payment));
router.get('', crudController.get(Payment));
router.get('/:id', crudController.getOne(Payment));
router.patch('/:id', crudController.updateOne(Payment));
router.delete('/:id', crudController.deleteOne(Payment));

router.get('/user/:userId', async(req, res)=> {
    console.log("payment");
    try{
        let user = await User.findById(req.params.userId).lean().exec();

        console.log("inPayment :", "user :", user);

        res.render('pages/payment.ejs', {
            user
        })
    } catch(err) {
        res.send(err);
    }
})

module.exports = router;