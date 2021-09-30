const express = require('express');

const router = express.Router();

const Bag = require('../models/bag.model');

const crudController = require('./crud.controller');

router.post('', crudController.post(Bag));
router.get('', crudController.get(Bag));
router.get(':id', crudController.getOne(Bag));
router.patch(':id', crudController.updateOne(Bag));
router.delete(':id', crudController.deleteOne(Bag));

module.exports = router;