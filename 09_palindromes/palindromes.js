const palindromes = function (str) {
  reverse = str.toLowerCase().replace(/[^a-z]/g, '');
  return reverse.split('').reverse().join('') == reverse;
};

// Do not edit below this line
module.exports = palindromes;
