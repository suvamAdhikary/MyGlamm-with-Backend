const express = require('express');

const router = express.Router();

const Tag = require('../models/tag.model');

const crudController = require('./crud.controller');

router.post('', crudController.post(Tag));
router.get('', crudController.get(Tag));
router.get('', crudController.getOne(Tag));
router.patch('', crudController.updateOne(Tag));
router.delete('', crudController.deleteOne(Tag));

module.exports = router;