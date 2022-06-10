const repeatString = function (hey, number) {
  if (number < 0) {
    return 'ERROR';
  }
  let string = '';
  string = `${hey.repeat(number)}`;
  return string;
};

// Do not edit below this line
module.exports = repeatString;
