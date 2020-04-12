'use strict';
module.exports = () => {
    return {
        quadraticEquation: (a, b, c) => {
            var d = b * b - 4 * a * c;
            var exit;
            if(d<0){
                exit = "корней нет";
            }else if(d==0){
                exit = -b/(2*a);
            }else{
                var x1 = (-b - Math.sqrt(d))/(2*a);
                var x2 = (-b + Math.sqrt(d))/(2*a);
                exit = [x1,x2];
            }

            return exit;
        }
    }
};