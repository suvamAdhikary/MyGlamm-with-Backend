const express = require('express');

const app = express();

// const router = express.Router();

router.get('', (req, res) => {
    res.render('components/signup.ejs')
})

// router.get('', async (req, res) => {
//     try {
//         res.render('components/signup.ejs')
//     } catch (err) {
//         res.render(err);
//     }
// })