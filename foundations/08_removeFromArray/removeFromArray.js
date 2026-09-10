const removeFromArray = function(inputArray, ...theArguments) {
    for (let i = 0; i < inputArray.length; i++) {
        for (let j = 0; j < theArguments.length; j++) {
            if (inputArray[i] === theArguments[j]) {
                inputArray.splice(inputArray.indexOf(theArguments[j]), 1);
                i--;
            }
        }
    }
    return inputArray;
};

// take an array and any number of additional arguments
// from that array remove the additional arguments
// return the resultant array

// Do not edit below this line
module.exports = removeFromArray;
