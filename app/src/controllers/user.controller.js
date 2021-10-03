const { json } = require('body-parser');
const express = require('express');

const router = express.Router();

const User = require('../models/user.model');
const Mobile = require('../models/mobile.model');

const crudController = require('./crud.controller');

router.post('', crudController.post(User));
router.get('', crudController.get(User));
router.get('/:id', crudController.getOne(User));
router.patch('/:id', crudController.updateOne(User));
router.delete('/:id', crudController.deleteOne(User));


// login route 
// router.get('/login', (req, res)=> {
//     res.render('pages/login')
// })


// signup controller start here

// router.post('', async (req, res) => {
//     let body = JSON.stringify({
//         _id: req.body._id,
//         mobileId: req.body.mobileId,
//         full_name: req.body.full_name,
//         email: req.body.email
//     })
//     console.log(body);
//     try {
//         const user = await User.create(body);
    
//         return res.status(201).send({user})
//     } catch (err) {
//         return res.status(400).send({err})
//     }
// })

// router.get('/mobiles', check({mobile: "required"}), async (req, res) => {
//     let code = req.body.countryCode;
//     let ph = req.body.mobile;
//     let id = `${code}-${ph}`;
//     try {
//         const user = await User.findById(id).lean().exec();
//         res.render('pages/login.ejs')
//         // res.render('components/signup.ejs')
//     } catch (err) {
//         res.render('pages/signup.ejs');
//     }
// })


// function check(data) {
//     return (req, res, next) => {
//         let errors = [];
//         Object.keys(data).forEach((item) => {
//             if(data[item] === "required") {
//                 if( ! req.query[item]) {
//                     errors.push(`Please add ${item} in the form`)
//                     // res.send(`Please add ${item} in the form`);
//                 }
//             }
//         })
//         if(errors.length) {
//             return res.send(errors.join('\n'));
//         }
//         next();
//     }
// }

// router.get('/:mobileId/:id', async (req, res) => {

//     try{
//         const mobile = await Mobile.findById(req.params.mobileId).lean().exec();
//         const user = await User.findById(req.params.id).lean().exec();
//         console.log( "frmCntrl", mobile);
//         // return res.status(200).send(mobile);

//         // console.log(mobile);
//         if(user === null) {
//             console.log("in" ,user);

//             res.render('pages/signup.ejs', {
//                 mobile,
//                 id: req.params.id
//             });
//         } else {
//             console.log("in", user);
//             res.render('pages/login.ejs', {
//                 mobile,
//                 id: req.params.id
//             })
//         }
//         return;
//         // mobile ? res.render('pages/login.ejs', {
//         //             mobile
//         //         }) : 
//     } catch (err) {
//         // res.render('pages/signup.ejs', {
//         //         mobile
//         //     })
//         res.send(mobile);
//         console.log(err);
//     }
// })

router.get('/mobile/:mid', async (req, res)=> {
    try{
        const user = await User.findOne({mobileId: req.params.mid}).lean().exec();
        return res.send(user);
    } catch(err){
        res.send(err);
    }
})


module.exports = router;