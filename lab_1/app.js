'use strict';
const express = require('express');
const services = require('./servicelayer')('./services');
const router = require('./router.js')('./routes/', services);
const app = express();
app.use(router);
app.listen(4000,()=>{
	console.log("server is listening");
})