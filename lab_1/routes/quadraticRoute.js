'use strict';
module.exports = (quadraticService) => {
    return (req, res) => {
        res.json(quadraticService.quadraticEquation(req.query.a, req.query.b, req.query.c));
    }
};