const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if(!Array.isArray(arr)) {
        throw new Error('Uncorrect argument');
    }
    let flagForDiscard = false;
    return arr.map((item, i, arr) => {
        if (flagForDiscard) {
            flagForDiscard = false;
            return '';
        }
        if (i > 0) {
            if (arr[i] === '--double-prev') {
                if(i > 1 && arr[i - 2] ==='--discard-next') 
                    return '';
                return arr[i - 1];
            }
        }
        if (i < arr.length - 1) {
            if (arr[i + 1] === '--discard-prev')
                return '';
            if (arr[i] === '--discard-next')
                flagForDiscard = true;
            if (arr[i] === '--double-next')
                return arr[i + 1];
        }
        if (item === '--double-prev'  || item === '--double-next'  || item === '--discard-prev' || item === '--discard-next') {
            return '';   
        }      
        return item;
    }).filter((item) => item !== '');
};
