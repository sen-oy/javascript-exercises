const reverseString = function(inputString) {
    let returnString = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
        returnString += inputString[i];
    }
    return returnString;
};

// takes a string
// reverses the string
// returns the string

// Do not edit below this line
module.exports = reverseString;
