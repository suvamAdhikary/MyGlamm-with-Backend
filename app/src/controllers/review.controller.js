const express = require('express');

const router = express.Router();

const Review = require('../models/review.model');

const crudController = require('./crud.controller');

router.post('', crudController.post(Review));
router.get('', crudController.get(Review));
router.get('', crudController.getOne(Review));
router.patch('', crudController.updateOne(Review));
router.delete('', crudController.deleteOne(Review));

module.exports = router;