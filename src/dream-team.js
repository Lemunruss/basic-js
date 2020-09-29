const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members === undefined || members === null ) {
    return false;
  }
  let arr = [];
  for (let i = 0; i < members.length; i++){
      if (typeof(members[i]) === 'string') {
        arr.push(members[i].trim()[0].toUpperCase());
      }        
  }
  if(arr.length == 0) {
    return false;
  }
  arr.sort();
  let str = arr.join('');
  
  return str;
};