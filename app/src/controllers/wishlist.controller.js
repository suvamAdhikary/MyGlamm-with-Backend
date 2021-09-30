const express = require('express');

const router = express.Router();

const Wishlist = require('../models/wishlist.model');

const crudController = require('./crud.controller');

router.post('', crudController.post(Wishlist));
router.get('', crudController.get(Wishlist));
router.get('/:id', crudController.getOne(Wishlist));
router.patch('/:id', crudController.updateOne(Wishlist));
router.delete('/:id', crudController.deleteOne(Wishlist));

module.exports = router;