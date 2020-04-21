const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const app = express();

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
    } catch (e) {
        console.log(e)
    }
}

start();