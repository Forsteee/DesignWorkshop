'use strict';
module.exports = (dir) => {
    const quadraticService = require(`${dir}/quadraticService`)();
    const regionService = require(`${dir}/regionService`)();
    const fibService = require(`${dir}/fibService`)();
    const dayOfWeekService = require(`${dir}/dayOfWeekService`)();
    const numberToWordService = require(`${dir}/numberToWordService`)();
    return {
        quadraticService,
        regionService,
        fibService,
        dayOfWeekService,
        numberToWordService
    };
};