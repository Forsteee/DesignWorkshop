'use strict';
module.exports = (dayOfWeekService) => {
    return (req, res) => {
        res.json(dayOfWeekService.getDayOfWeek(req.query.dateS));
    }
};