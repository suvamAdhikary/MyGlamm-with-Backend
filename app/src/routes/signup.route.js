const express = require('express');

const router = express.Router()

const Mobile = require('../models/mobile.model');
const User = require('../models/user.model');
// const crudController = require('../controllers/crud.controller');

router.get("", async (req, res) => {
	try {
		res.render("pages/signup");
	} catch (err) {
		return res.status(400).json({ err: err.message });
	}
})

// router.post("", async (req, res) => {
// 	try {
// 		res.render("pages/login");
// 	} catch (err) {
// 		return res.status(400).json({ err: err.message });
// 	}
// })
// router.post('', async (req, res) => {

//     try {
//         const mobile = await Mobile.create(req.body);
//         // mobile = await mobile.json();
//         res.render('pages/signup.ejs', {
//             mobile: await mobile.json(),
//         })
//     } catch (err) {
//         return res.status(400).send({err})
//     }
// });



// router.post('', (req, res) => {

//     res.render('components/signup.ejs')
// })

// router.get('', async (req, res) => {
//     try {
//         res.render('components/signup.ejs')
//     } catch (err) {
//         res.render(err);
//     }
// })

module.exports = router;