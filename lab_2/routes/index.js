const customerRoutes = require('./customerRoutes');
const requestRoutes = require('./requestRoutes');
const serviceRoutes = require('./serviceRoutes');

module.exports = function(app, mongoose, Customer, Request, Service) {
    customerRoutes(app, mongoose, Customer);
    requestRoutes(app, mongoose, Customer, Request, Service);
    serviceRoutes(app, mongoose, Service);
};