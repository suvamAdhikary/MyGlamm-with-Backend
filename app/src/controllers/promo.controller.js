const express = require('express');

const router = express.Router();

const Promo = require('../models/promo.model');

const crudController = require('./crud.controller');

router.post('', crudController.post(Promo));
router.get('', crudController.get(Promo));
router.get(':id', crudController.getOne(Promo));
router.patch(':id', crudController.updateOne(Promo));
router.delete(':id', crudController.deleteOne(Promo));

module.exports = router;