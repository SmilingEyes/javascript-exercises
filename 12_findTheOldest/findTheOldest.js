const findTheOldest = function (people) {
  return people.reduce((oldestPerson, currentPerson) => {
    const oldestAge = calculateAge(
      oldestPerson.yearOfBirth,
      oldestPerson.yearOfDeath
    );
    const currentAge = calculateAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );
    return oldestAge < currentAge ? currentPerson : oldestPerson;
  });
};

const calculateAge = function (birthYear, deathYear) {
  if (!deathYear) {
    deathYear = new Date().getFullYear();
  }

  return deathYear - birthYear;
};

// Do not edit below this line
module.exports = findTheOldest;
