const express = require('express');

const router = express.Router();

const User = require('../models/user.model');

const crudController = require('./crud.controller');

router.post('', crudController.post(User));
router.get('', crudController.get(User));
router.get('', crudController.getOne(User));
router.patch('', crudController.updateOne(User));
router.delete('', crudController.deleteOne(User));

module.exports = router;