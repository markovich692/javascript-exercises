const findTheOldest = function (arrayOfPeople) {
  let oldestPerson;
  const arrOldestToYoungestBirth = arrayOfPeople.sort((a, b) => a.yearOfBirth - b.yearOfBirth);

  if (arrOldestToYoungestBirth[0].yearOfDeath === undefined) {
    oldestPerson = arrOldestToYoungestBirth[0];
  } else {
    findOldestPerson = arrayOfPeople
      .filter(function (person) {
        return person.yearOfDeath != undefined;
      })
      .sort(function (a, b) {
        return b.yearOfDeath - b.yearOfBirth - (a.yearOfDeath - a.yearOfBirth);
      });
    oldestPerson = findOldestPerson[0];
  }

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
