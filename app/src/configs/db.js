const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect('mongodb+srv://suvamAdhikary:myGlamm_unit-3@cluster0.01zvv.mongodb.net/myglamm?retryWrites=true&w=majority');
};