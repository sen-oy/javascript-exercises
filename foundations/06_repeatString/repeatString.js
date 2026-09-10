const repeatString = function(inputString, numOfRepetitions) {
    let resultString = "";
    if (numOfRepetitions < 0) return "ERROR";
    for (let i = 0; i < numOfRepetitions; i++) {
        resultString += inputString;
    }
    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
