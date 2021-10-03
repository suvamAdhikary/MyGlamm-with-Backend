const express = require('express');

const router = express.Router();

const Mobile = require('../models/mobile.model');

const crudController = require('./crud.controller');

// router.post('', crudController.post(Mobile));
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

// router.get('/check/:countryCode/:ph', async (req, res) => {

//     try{
        
//         const mobile = await Mobile.findOne({$and: [{countryCode: req.params.countryCode}, {mobile: req.params.ph}]}).lean().exec();
//         console.log( "frmCntrl", mobile);
//         // return res.status(200).send(mobile);

//         // console.log(mobile);
//         if(mobile === null) {
//             console.log("in" ,mobile);

//             res.render('pages/signup.ejs', {
//                 code: req.params.countryCode,
//                 ph: req.params.ph
//             });
//         } else {
//             console.log("in", mobile);
//             res.render('pages/login.ejs', {
//                 mobile
//             })
//         }
//         // return;
//         // mobile ? res.render('pages/login.ejs', {
//         //             mobile
//         //         }) : 
//     } catch (err) {
//         // res.render('pages/signup.ejs', {
//         //         mobile
//         //     })
//         console.log(err);
//     }
// })

router.post('', async (req, res) => {
    console.log(req.body);
    try{
        const mobile = await Mobile.create(req.body);
        // const mobile = await Mobile.findOne({$and: [{countryCode: req.query.countryCode}, {mobile: req.query.ph}]}).lean().exec();
        console.log("post success", mobile);
            res.render('pages/signup.ejs', {
                mobile,
                id: `${mobile.countryCode}${mobile.mobile}`
            })
  
        // if(mobile === null) {
        //     console.log("in" ,mobile);

        //     res.render('pages/signup.ejs', {
        //         mobile
        //     });
        // } else {
        //     console.log("in", mobile);
        //     res.render('pages/login.ejs', {
        //         mobile
        //     })
        // }
        // mobile ? res.render('pages/login.ejs', {
        //             mobile
        //         }) : 
    } catch (err) {
        mobile = await Mobile.findOne({$and: [{countryCode: req.body.countryCode}, {mobile: req.body.mobile}]}).lean().exec();

        // return res.status(500).send(err);
            res.render('pages/login.ejs', {
                mobile
            })
    }
})

function validatePhone(req, res, next) {
    
}


module.exports = router;