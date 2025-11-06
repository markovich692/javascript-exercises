const removeFromArray = function (arr, index, number = 1) {
  let count = 0;
  let indexes = [];

    if (!arr.includes(index)) return arr;

  arr.forEach(function (item, i) {
    if (item === index) {
      count += 1;
      indexes.push(i);
    } else {
      count += 0;
    }
  });

  if (count >= 2) {
    for (let i = indexes.length - 1; i >= 0; i--) {
      arr.splice(indexes[i], 1);
    }
  } else {
    arr.splice(index - number, number);
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
