'use strict';
module.exports = (dir) => {
    const configService = require(`${dir}/configService`)();
    const logService = require(`${dir}/logService`)(configService);
    const quadraticService = require(`${dir}/quadraticService`)();
    const regionService = require(`${dir}/regionService`)();
    const fibService = require(`${dir}/fibService`)();
    const dayOfWeekService = require(`${dir}/dayOfWeekService`)();
    const numberToWordService = require(`${dir}/numberToWordService`)();
    return {
        configService,
        logService,
        quadraticService,
        regionService,
        fibService,
        dayOfWeekService,
        numberToWordService
    };
};