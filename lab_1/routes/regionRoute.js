'use strict';
module.exports = (regionService) => {
    return (req, res) => {
        res.json(regionService.getRegion(req.params.numberRegion));
    }
};