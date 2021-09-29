const express = require('express');

const path = require('path');

const connect = require('./configs/db');

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));

app.set('view engine', 'ejs')


// Routes from controller

const categoryController = require('./controllers/category.controller');
const subCategoryController = require('./controllers/subCategory.controller');
const tagController = require('./controllers/tag.controller');
const productController = require('./controllers/product.controller');
const promoController = require('./controllers/promo.controller');


app.use('/categories', categoryController);
app.use('/categories/subcategories', subCategoryController);
app.use('/categories/tag', tagController);
app.use('/products', productController);
app.use('/promo', promoController);


// Routes from routes

const indexRoute = require('./routes/index.route');
app.use('/myglamm', indexRoute);




const PORT = 5555;
app.listen(PORT, async () => {
	try {
		await connect();

		console.log(`Listening to port: ${PORT}`);

	} catch (err) {

		console.log(`Database not connected`);
        
	};
});