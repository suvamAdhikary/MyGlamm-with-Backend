const express = require('express');

const router = express.Router();

const Mobile = require('../models/mobile.model');

const crudController = require('./crud.controller');

router.post('', crudController.post(Mobile));
router.get('', crudController.get(Mobile));
router.get('/:id', crudController.getOne(Mobile));
router.patch('/:id', crudController.updateOne(Mobile));
router.delete('/:id', crudController.deleteOne(Mobile));

module.exports = router;