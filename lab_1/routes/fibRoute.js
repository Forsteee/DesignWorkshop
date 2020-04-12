'use strict';
module.exports = (fibService) => {
    return (req, res) => {
        res.json(fibService.getFib(req.params.number));
    }
};