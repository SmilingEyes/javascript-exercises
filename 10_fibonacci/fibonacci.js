const fibonacci = function (num) {
  if (num < 0) return 'OOPS';
  if (num === 0) return 0;
  let prevNum = 0;
  let newNum = 1;
  for (let i = 1; i < num; i++) {
    const temp = newNum;
    newNum = prevNum + newNum;
    prevNum = temp;
  }
  return newNum;
};

// Do not edit below this line
module.exports = fibonacci;
