const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const PORT = 4000;
const app = express();

const Service = require('./models/service')(mongoose);
const Client = require('./models/client')(mongoose);
const Application = require('./models/application')(mongoose);
async function start() {
    try {
        await mongoose.connect(
            'mongodb+srv://Konstantin:1@lab2-bghcz.mongodb.net/test',
            {
                useNewUrlParser: true,
                useFindAndModify: false
            }
        )
        app.listen(PORT, () => {
            console.log('pe pe peee pepepepe .....')
        })
        require('./routes')(
            app,
            mongoose,
            Client,
            Application,
            Service
        );
    } catch (e) {
        console.log(e)
    }
}

start();