'use strict';
module.exports = (dir, services) => {
    const router = require('express').Router();

    const defaultRoute = require(`${dir}/defaultRoute.js`)();
    const quadraticRoute = require(`${dir}/quadraticRoute.js`)(services.quadraticService);
    const regionRoute = require(`${dir}/regionRoute.js`)(services.regionService);
    const fibRoute = require(`${dir}/fibRoute.js`)(services.fibService);
    const dayOfWeekRoute = require(`${dir}/dayOfWeekRoute.js`)(services.dayOfWeekService);
    const numberToWordRoute = require(`${dir}/numberToWordRoute.js`)(services.numberToWordService);

    router.get('/', defaultRoute);
    router.get('/quadratic', quadraticRoute);
    router.get('/region/:numberRegion', regionRoute);
    router.get('/fib/:number', fibRoute);
    router.get('/day', dayOfWeekRoute);
    router.get('/number/:number', numberToWordRoute);
    return router;
};