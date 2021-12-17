const express = require('express');

const router = express.Router();

const Review = require('../models/review.model');

const crudController = require('./crud.controller');

router.post('', crudController.post(Review));
router.get('', crudController.get(Review));
router.get('/:id', crudController.getOne(Review));
router.patch('/:id', crudController.updateOne(Review));
router.delete('/:id', crudController.deleteOne(Review));

module.exports = router;