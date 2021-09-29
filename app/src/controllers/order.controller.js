const express = require('express');

const router = express.Router();

const Order = require('../models/order.model');

const crudController = require('./crud.controller');

router.post('', crudController.post(Order));
router.get('', crudController.get(Order));
router.get('', crudController.getOne(Order));
router.patch('', crudController.updateOne(Order));
router.delete('', crudController.deleteOne(Order));

module.exports = router;