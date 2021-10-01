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

router.get('/check/:countryCode/:ph', async (req, res) => {

    try{
        
        const mobile = await Mobile.findOne({$and: [{countryCode: req.params.countryCode}, {mobile: req.params.ph}]}).lean().exec();
        console.log(mobile);
        if(mobile === null) {
            console.log("in" ,mobile);

            res.render('pages/signup.ejs', {
                mobile
            });
        } else {
            console.log("in", mobile);
            res.render('pages/login.ejs', {
                mobile
            })
        }
        // mobile ? res.render('pages/login.ejs', {
        //             mobile
        //         }) : 
    } catch (err) {
        console.log(err);
    }
})

router.post('/check', async (req, res) => {
    console.log(req.body);
    try{
        
        const mobile = await Mobile.findOne({$and: [{countryCode: req.query.countryCode}, {mobile: req.query.ph}]}).lean().exec();
        console.log(mobile);
        if(mobile === null) {
            console.log("in" ,mobile);

            res.render('pages/signup.ejs', {
                mobile
            });
        } else {
            console.log("in", mobile);
            res.render('pages/login.ejs', {
                mobile
            })
        }
        // mobile ? res.render('pages/login.ejs', {
        //             mobile
        //         }) : 
    } catch (err) {
        console.log(err);
    }
})

function validatePhone(req, res, next) {
    
}


module.exports = router;