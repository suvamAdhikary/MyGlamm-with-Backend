const express = require('express');

const router = express.Router();

const Payment = require('../models/payment.model');

const crudController = require('./crud.controller');

router.post('', crudController.post(Payment));
router.get('', crudController.get(Payment));
router.get('', crudController.getOne(Payment));
router.patch('', crudController.updateOne(Payment));
router.delete('', crudController.deleteOne(Payment));

module.exports = router;