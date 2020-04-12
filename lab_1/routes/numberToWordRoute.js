'use strict';
module.exports = (numberToWordService) => {
    return (req, res) => {
        res.json(numberToWordService.getWord(req.params.number));
    }
};