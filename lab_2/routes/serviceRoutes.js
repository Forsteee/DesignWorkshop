const ObjectID = require('mongodb').ObjectID;

module.exports = (app, mongoose, Service) => {
    app.get('/service', (req, res) => {
        Service.find({}, (err, service) =>{
            if(err) return res.sendStatus(500);
            res.send(service);
        });
    });

    app.get('/service/:id', (req, res) => {
        const id = { '_id': new ObjectID(req.params.id) };

        Service.findOne({_id: id}, (err, service) =>{
            if (err) return res.sendStatus(500);
            res.send(service);
        });
    });

    app.post('/service', (req, res) => {
        if (!req.body) return res.sendStatus(400);

        const params = req.body;
        const serviceData = {
            name: params.name,
            price: params.price,
            description: params.description
        };
        const service = new Service(serviceData);

        service.save((err) => {
            if (err) return res.sendStatus(500);
            res.send(service);
        });
    });

    app.put('/service/:id', (req, res) => {
        if (!req.body) return res.sendStatus(400);

        const id = { '_id': new ObjectID(req.params.id) };
        const params = req.body;
        const serviceData = {
            name: params.name,
            price: params.price,
            description: params.description
        };

        Service.findOneAndUpdate({_id: id}, serviceData, {new: true}, (err, service) => {
            if (err) return res.sendStatus(500);
            if (service === null) {
                res.send('No such service...........')
            } else {
                res.send(service);
            }
        });

    });

    app.delete('/service/:id', (req, res) => {
        const id = { '_id': new ObjectID(req.params.id) };

        Service.findByIdAndDelete(id, (err, service) =>{
            if (err) return res.sendStatus(500);
            if (service === null) {
                res.send('No such service............')
            } else {
                res.send(service);
            }
        });
    });
};