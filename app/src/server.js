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
const userController = require('./controllers/user.controller');
const addressController = require('./controllers/address.controller');
const wishlistController = require('./controllers/wishlist.controller');
const bagController = require('./controllers/bag.controller');
const paymentController = require('./controllers/payment.controller');
const orderController = require('./controllers/order.controller');
const reviewController = require('./controllers/review.controller');

app.use('/categories', categoryController);
app.use('/categories/subcategories', subCategoryController);
app.use('/categories/tag', tagController);
app.use('/products', productController);
app.use('/promo', promoController);
app.use('/user', userController);
app.use('/address', addressController);
app.use('/wishlist', wishlistController);
app.use('/bag', bagController);
app.use('/payment', paymentController);
app.use('/order', orderController);
app.use('/review', reviewController);


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