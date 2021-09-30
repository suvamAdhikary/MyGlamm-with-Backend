const express = require('express');

const router = express.Router();

const Category = require('../models/category.model');

const crudController = require('./crud.controller');

router.post('', crudController.post(Category));
router.get('', crudController.get(Category));
// router.get('/:id', crudController.getOne(Category));
router.patch('/:id', crudController.updateOne(Category));
router.delete('/:id', crudController.deleteOne(Category));


// router.get('/:id', async (req, res) => {
    
//     try {
//         const category = await Category.findById(req.params.id).lean().exec();
//         console.log(category);
//         res.render('pages/category.ejs', {
//             category
//         });
//     } catch (err) {
//         return res.status(400).send({err})
//     }
// });



module.exports = router;