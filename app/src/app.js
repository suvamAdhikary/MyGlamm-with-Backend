const path = require('path');

const express = require('express');

const connect = require('./configs/db');

const app = express();

app.use(express.json());

app.set('view engine', 'ejs')

app.listen(5555, async () => {
    await connect();

    console.log("listening on port 5555");
})