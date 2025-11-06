const removeFromArray = function (arr, ...entries) {
  entries.forEach(function (entry) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (entry === arr[i] && typeof entry === typeof arr[i]) {
        arr.splice(i, 1);
      } else {
        continue;
      }
    }
  });

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
