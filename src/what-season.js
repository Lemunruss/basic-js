const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(arguments.length === 0) {
    return 'Unable to determine the time of year!';
  }
  if (date.hasOwnProperty('getMonth')) {
    throw new Error('Incorrect date!');
  } 
  let month = date.getMonth();
  let seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn ', 'autumn ', 'autumn ', 'winter'];
  let season = seasons[month];

  return season;
};