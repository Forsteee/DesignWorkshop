'use strict';
module.exports = () => {
    return {
        getDayOfWeek: (dateS) => {
            let dateSplit = dateS.split('.');
            var newdate = `${dateSplit[2]},${dateSplit[1]},${dateSplit[0]}`;
            let date = new Date(newdate);//dateSplit[2], dateSplit[1], dateSplit[0]
            let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

            return days[date.getDay()];
        }
    }
};