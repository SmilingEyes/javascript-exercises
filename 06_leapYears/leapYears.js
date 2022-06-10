const leapYears = function (leapYear) {
  return leapYear % 4 === 0 && (leapYear % 100 !== 0 || leapYear % 400 === 0);
};

// Do not edit below this line
module.exports = leapYears;
