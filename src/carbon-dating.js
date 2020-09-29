const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const LOG2 = 0.693;

module.exports = function dateSample(sampleActivity) {
  if(arguments.length == 0 || parseFloat(sampleActivity) > 15 || sampleActivity == "" || isNaN(parseFloat(sampleActivity)) 
  || typeof(sampleActivity) != 'string' || parseFloat(sampleActivity) <= 0 || sampleActivity === null ) {
      return false;
    }   
    let a = LOG2 / HALF_LIFE_PERIOD;
    let age = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / a);
    return age;
};
