const findTheOldest = function(peopleArray) {
    let ordered = peopleArray.sort((personA, personB) => {
        let ageA = (personA.yearOfDeath || (new Date().getFullYear())) - personA.yearOfBirth;
        let ageB = (personB.yearOfDeath || (new Date().getFullYear())) - personB.yearOfBirth;
        return ageA < ageB ? 1 : -1;
    })
    return ordered[0];
};

// Do not edit below this line
module.exports = findTheOldest;
