const fibonacci = function (number) {
  let arr = [0, 1];

  number = Number(number);

  if (number === 0) return 0;

  if (number < 0) return "OOPS";

  for (let i = 2; i <= number; i++) {
    let arrLength = arr.length;

    let value = arr[arrLength - 2] + arr[arrLength - 1];

    arr.push(value);
  }

  return arr[arr.length - 1];
};

//Do not edit below this line
module.exports = fibonacci;
