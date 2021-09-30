const express = require('express');

const router = express.Router();

const Tag = require('../models/tag.model');

const crudController = require('./crud.controller');

router.get('', async (req, res) => {
    
    try {
        const tags = await Tag.find().populate({
            path:'category',
            select:'name'
        }).populate({
            path: 'subCategory',
            select: 'name'
        }).lean().exec();
        
        return res.status(200).send(tags)
    } catch (err) {
        return res.status(400).send({err})
    }
});

router.post('', crudController.post(Tag));
// router.get('', crudController.get(Tag));
router.get('/:id', crudController.getOne(Tag));
router.patch('/:id', crudController.updateOne(Tag));
router.delete('/:id', crudController.deleteOne(Tag));

module.exports = router;