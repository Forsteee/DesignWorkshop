const ObjectID = require('mongodb').ObjectID;

module.exports = (app, mongoose, Customer) => {
    app.get('/customers', (req, res) => {
        Customer.find({}, (err, customer) =>{
            if (err) return res.sendStatus(500);
            res.send(customer);
        });
    });
    
    app.get('/customers/:id', (req, res) => {
        const id = { '_id': new ObjectID(req.params.id) };

        Customer.findOne({_id: id}, (err, customer) =>{
            if (err) return res.sendStatus(500);
            res.send(customer);
        });
    });
    
    app.post('/customers', (req, res) => {
        if (!req.body) return res.sendStatus(400);

        const params = req.body;
        const customerData = {
            fio: params.fio,
            phone: params.phone,
            age: params.age,
            adress: params.adress
        };
        const client = new Customer(customerData);

        Customer.save((err) => {
            if (err) return res.sendStatus(500);
            res.send(Customer);
        });
    });
    
    app.put('/customers/:id', (req, res) => {
        if (!req.body) return res.sendStatus(400);

        const id = { '_id': new ObjectID(req.params.id) };
        const params = req.body;
        const customerData = {
            fio: params.fio,
            phone: params.phone,
            age: params.age,
            adress: params.adress
        };

        Customer.findOneAndUpdate({_id: id}, customerData, {new: true}, (err, customer) => {
            if (err) return res.sendStatus(500);
            if (customer === null) {
                res.send('No such customer.....')
            } else {
                res.send(customer);
            }

        });

    });
    
    app.delete('/customers/:id', (req, res) => {
        const id = { '_id': new ObjectID(req.params.id) };

        Customer.findByIdAndDelete(id, (err, customer) =>{
            if (err) return res.sendStatus(500);
            if (customer === null) {
                res.send('No such customer.....')
            } else {
                res.send(customer);
            }
        });
    });
};