const palindromes = function (str) {
  const removeChar = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const reverseChar = removeChar.split("").reverse().join("");

  return removeChar === reverseChar ? true : false;
};
// Do not edit below this line
module.exports = palindromes;
