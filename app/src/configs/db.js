const mongoose = require('mongoose');

require('dotenv').config();

module.exports = () => {
    return mongoose.connect(`mongodb+srv://myGlamm:${process.env.DB_PASS}@cluster0.46pid.mongodb.net/myGlammDatabase?retryWrites=true&w=majority`);
};