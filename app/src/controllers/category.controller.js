const express = require('express');

const router = express.Router();

const Category = require('../models/category.model');

const crudController = require('./crud.controller');

router.post('', crudController.post(Category));
router.get('', crudController.get(Category));
router.get(':id', crudController.getOne(Category));
router.patch(':id', crudController.updateOne(Category));
router.delete(':id', crudController.deleteOne(Category));

module.exports = router;