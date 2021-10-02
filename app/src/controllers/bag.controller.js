const express = require('express');

const router = express.Router();

const Bag = require('../models/bag.model');

const crudController = require('./crud.controller');

router.post('', crudController.post(Bag));
router.get('', crudController.get(Bag));
router.get('/:id', crudController.getOne(Bag));
router.patch('/:id', crudController.updateOne(Bag));
router.delete('/:id', crudController.deleteOne(Bag));

router.get('/:productId/:userId', async (req, res)=> {
    try {
        let product = await Bag.findOne({$and: [{productId: req.params.productId, userId: req.params.userId}]});
        // res.send({product});

        if(product !== null) {
            await fetch(`http://localhost:5555/bags/${product._id}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    quantity: `${+product.quantity + 1}`
                }),
                headers: {"content-type": 'application/json'},
           })
           } else {
            await fetch(`http//localhost:5555/bags`, {
                method: 'POST',
                body: JSON.stringify ({
                    productId,
                    userId,
                    quantity: 1,
                })
            })
            await fetch(`http//localhost:5555/users/${userId}`, {
                method: 'PATCH',
                body: JSON.stringify ({
                    totalItemsInBag: `${user.totalItemsInBag + 1}`
                }),
                headers: {"content-type": 'application/json'}
            })
           }

    }catch(err){
        res.send(err);
    }
})

module.exports = router;