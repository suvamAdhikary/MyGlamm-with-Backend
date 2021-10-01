const express = require('express');

const router = express.Router();

const User = require('../models/user.model');

const crudController = require('./crud.controller');

router.post('', crudController.post(User));
router.get('', crudController.get(User));
router.get('/:id', crudController.getOne(User));
router.patch('/:id', crudController.updateOne(User));
router.delete('/:id', crudController.deleteOne(User));




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

module.exports = router;