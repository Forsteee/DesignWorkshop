const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const axios = require('axios');
const index = require('./routes/index');
const PORT = 4000;
const app = express();

async function start() {
    try {
    app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use('/', index);
	module.exports = app;
    } catch (e) {
        console.log(e)
    }
}

start();