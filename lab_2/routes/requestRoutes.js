const ObjectID = require('mongodb').ObjectID;
module.exports = (app, mongoose, Customer, Request, Service) => {
    app.get('/request', (req, res) => {
        Request.find({})
            .populate('customer service')
            .then(request => res.send(request));
    });

    // get one application by id
    app.get('/request/:id', (req, res) => {
        const id = { '_id': new ObjectID(req.params.id) };

        Request
            .findOne({_id: id})
            .populate('customer service')
            .then(request => res.send(request));
    });

    app.post('/request', (req, res) => {
        if (!req.body) return res.sendStatus(400);

        const params = req.body;
        const requestData = {
            customer: params.customer,
            service: params.service.split(', ')
        };
        const request = new Request(requestData);

        request.save((err) => {
            if (err) return res.sendStatus(500);
            res.send(request);
        });
    });

    app.put('/request/:id', (req, res) => {
        if (!req.body) return res.sendStatus(400);

        const id = { '_id': new ObjectID(req.params.id) };
        const params = req.body;
        const requestData = {
            customer: params.customer,
            service: params.service.split(', ')
        };

        Request
            .findOneAndUpdate({_id: id}, requestData, {new: true})
            .populate('customer service')
            .then(request => res.send(request))
            .catch(err => console.log(err));
    });

    app.delete('/request/:id', (req, res) => {
        const id = { '_id': new ObjectID(req.params.id) };

        Request.findByIdAndDelete(id, (err, request) =>{
            if (err) return res.sendStatus(500);
            res.send(request);
        });
    });
};