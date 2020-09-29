const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    if(arguments.length === 0) return 0;
    let arr1 = [];
    let arr2 = [];
    let arr3 = arr1.concat(...matrix);
    arr3.forEach((item)=>{
      if (item === "^^") {
        arr2.push(item);
      } 
    })
    let cats = arr2.length;
    return cats;
};