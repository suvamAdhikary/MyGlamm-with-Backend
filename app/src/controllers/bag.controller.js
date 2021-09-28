const express = require('express');

const router = express.Router();

const Bag = require('../models/bag.model');

const crudController = require('./crud.controller');

router.post('', crudController.post(Bag));
router.get('', crudController.get(Bag));
router.get('', crudController.getOne(Bag));
router.patch('', crudController.updateOne(Bag));
router.delete('', crudController.deleteOne(Bag));

module.exports = router;