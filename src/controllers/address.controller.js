const express = require('express');

const router = express.Router();

const Address = require('../models/address.model');

const crudController = require('./crud.controller');

router.post('', crudController.post(Address));
router.get('', crudController.get(Address));
router.get('/:id', crudController.getOne(Address));
router.patch('/:id', crudController.updateOne(Address));
router.delete('/:id', crudController.deleteOne(Address));

module.exports = router;