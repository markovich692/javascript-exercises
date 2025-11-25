const add = function (a, b) {
  return Number(a) + Number(b);
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (a) {
  a = Array.isArray(a) ? a.reduce((acc, num) => (acc += num), 0) : a;

  return Number(a);
};

const multiply = function (a) {
  a = Array.isArray(a) ? a.reduce((acc, num) => (acc *= num), 1) : a;

  return Number(a);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let initialArr = [1];

  for (let i = 1; i <= a; i++) {
    initialArr.push(i);
  }

  const res = initialArr.reduce((acc, num) => (acc *= num));
  return res;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
