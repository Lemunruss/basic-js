const CustomError = require("../extensions/custom-error");


const SECONDS = 3600;

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turns = Math.pow(2, disksNumber) - 1;
    turnsSpeed /= SECONDS;
    let seconds =  Math.floor(turns / turnsSpeed);
    return {turns, seconds};
};
