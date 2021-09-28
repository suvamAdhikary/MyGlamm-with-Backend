const path = require('path');

const express = require('express');

const connect = require('./configs/db');

const app = express();

app.use(express.json());

app.set('view engine', 'ejs')


// Routes
const categoryController = require('./controllers/category.controller');

app.use('/categories', categoryController);


const PORT = 5555;
app.listen(PORT, async () => {
	try {
		await connect();

		console.log(`Listening to port: ${PORT}`);

	} catch (err) {

		console.log(`Database not connected`);
        
	};
});