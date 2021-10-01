const express = require('express');

const router = express.Router();

const Mobile = require('../models/mobile.model');

const crudController = require('./crud.controller');

router.post('', crudController.post(Mobile));
// router.get('', crudController.get(Mobile));
router.get('/:id', crudController.getOne(Mobile));
router.patch('/:id', crudController.updateOne(Mobile));
router.delete('/:id', crudController.deleteOne(Mobile));

router.get('', async (req, res) => {
    try {
        res.render('pages/mobile.ejs')
    } catch (err) {
        res.send(err);
    }
    
})

router.get('/check/', async (req, res) => {

    try{
        console.log(req.query.countryCode);
        const mobile = await Mobile.findOne({$and: [{countryCode: req.query.countryCode}, {mobile: req.query.ph}]}).lean().exec();
        console.log(mobile);
        mobile ? res.render('pages/login.ejs', {
                    mobile
                }) : res.render('pages/signup.ejs', {
                        mobile
                    });
    } catch (err) {
        console.log(err);
    }
})

function validatePhone(req, res, next) {
    
}


module.exports = router;