const express = require('express');

// const app = express();

const router = express.Router();



router.get("", async (req, res) => {
	try {
		res.render("pages/login");
	} catch (err) {
		return res.status(400).json({ err: err.message });
	}
})

module.exports = router;