'use strict';
module.exports = () => {
    return {
        getFib: (number) => {

            var sq5 = Math.sqrt(5);
            var a = (1 + sq5) / 2;
            var b = (1 - sq5) / 2;
            return (Math.pow(a, number) - Math.pow(b, number)) / sq5;
        },
    }
};