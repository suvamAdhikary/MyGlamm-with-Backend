const express = require('express');

const path = require('path');

const connect = require('./configs/db');

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static("public"))
app.set("views", path.join(__dirname, "views"));

app.set('view engine', 'ejs')


// Routes from controller

const categoryController = require('./controllers/category.controller');
const subCategoryController = require('./controllers/subCategory.controller');
const tagController = require('./controllers/tag.controller');
const productController = require('./controllers/product.controller');
const promoController = require('./controllers/promo.controller');
const mobileController = require('./controllers/mobile.controller');
const userController = require('./controllers/user.controller');
const addressController = require('./controllers/address.controller');
const wishlistController = require('./controllers/wishlist.controller');
const bagController = require('./controllers/bag.controller');
const paymentController = require('./controllers/payment.controller');
const orderController = require('./controllers/order.controller');
const reviewController = require('./controllers/review.controller');

app.use('/categories', categoryController);
app.use('/categories/subcategories', subCategoryController);
app.use('/categories/tags', tagController);
app.use('/products', productController);
app.use('/promos', promoController);
app.use('/mobiles', mobileController);
app.use('/users', userController);
app.use('/addresses', addressController);
app.use('/wishlists', wishlistController);
app.use('/bags', bagController);
app.use('/payments', paymentController);
app.use('/orders', orderController);
app.use('/reviews', reviewController);


// Routes from routes

const indexRoute = require('./routes/index.route');
const loginRoute = require('./routes/login.route');
const signupRoute = require('./routes/signup.route');
// const checkoutRoute = require('./routes/checkout.route');

app.use('/', indexRoute);
app.use('/login', loginRoute);
app.use('/signup', signupRoute);
// app.use('/bags/checkout', checkoutRoute);




app.listen(process.env.PORT || 5000, async () => {
	try {
		await connect();

		console.log(`Listening to port: ${process.env.PORT || 5000}`);

	} catch (err) {

		console.log(`Database not connected`);
        
	};
});