const findTheOldest = function(people) {
    currentYear = (new Date().getFullYear());
    const sortedByAge = people.sort((a, b) => (a.yearOfBirth - a.yearOfDeath) > (b.yearOfBirth - b.yearOfDeath) ? 1:-1);
    if (sortedByAge[0] && !(sortedByAge[0].yearOfDeath)) return sortedByAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
