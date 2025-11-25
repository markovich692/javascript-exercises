const getTheTitles = function (booksArray) {
  const res = booksArray.map(function (book) {
    return book.title;
  });

  return res;
};

// Do not edit below this line
module.exports = getTheTitles;
