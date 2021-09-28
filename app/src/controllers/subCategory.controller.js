const express = require('express');

const router = express.Router();

const SubCategory = require('../models/subCategory.model');

const crudController = require('./crud.controller');

router.post('', crudController.post(SubCategory));
router.get('', crudController.get(SubCategory));
router.get('', crudController.getOne(SubCategory));
router.patch('', crudController.updateOne(SubCategory));
router.delete('', crudController.deleteOne(SubCategory));

module.exports = router;