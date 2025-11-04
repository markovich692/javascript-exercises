const number = Math.floor(Math.random() * 1000);

const repeatString = function (string, number) {
  let str = "";
  if (number < 0) return "ERROR";
  for (let i = 0; i < number; i++) {
    str += string;
  }
  return str;
};
// Do not edit below this line
module.exports = repeatString;
