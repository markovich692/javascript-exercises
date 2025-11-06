const sumAll = function (...entries) {
  let arrValues = [];
  let sum = 0;

  let condition = entries.some((num) => num < 0 || !Number.isInteger(num) || typeof num === "string" || num.length);

  if (condition) return "ERROR";

  //Sort the array of entries from smallest to largest value
  entries.sort((a, b) => a - b);

  //Store entries into variables start and end
  let [start, end] = entries;

  for (let i = start; i <= end; i++) {
    arrValues.push(i);
  }

  arrValues.forEach((num) => {
    sum += num;
  });

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
