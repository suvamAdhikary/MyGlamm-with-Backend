const express = require('express');

const router = express.Router();

const Promo = require('../models/promo.model');

const crudController = require('./crud.controller');

router.post('', crudController.post(Promo));
router.get('', crudController.get(Promo));
router.get('', crudController.getOne(Promo));
router.patch('', crudController.updateOne(Promo));
router.delete('', crudController.deleteOne(Promo));

module.exports = router;