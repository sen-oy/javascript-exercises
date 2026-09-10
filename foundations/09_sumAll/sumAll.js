const sumAll = function(firstNumber, secondNumber) {
    if (firstNumber < 0 || secondNumber < 0) {
        return "ERROR";
    }

    if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) {
        return "ERROR";
    }
    
    let lowerBound, upperBound;
    let sum = 0;
    if (firstNumber < secondNumber) {
        lowerBound = firstNumber;
        upperBound = secondNumber;
    } else {
        lowerBound = secondNumber;
        upperBound = firstNumber;
    }

    for (let i = lowerBound; i <= upperBound; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
