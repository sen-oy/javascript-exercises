const palindromes = function (stringInput) {
    let startString = trimString(stringInput);
    let reverseString = '';
    for (let i = startString.length - 1; i >= 0; i--) {
        reverseString += startString[i];
    }
    
    if (startString === reverseString) {
        return true;
    } else {
        return false;
    }
};

function trimString (stringInput) {
    let stringArray = stringInput.toLowerCase().split("");
    let filteredStringArray = stringArray.filter(character => {
        let characterArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
                            '0','1','2','3','4','5','6','7','8','9'];
        if (characterArray.includes(character)) {
            return true;
            }
        })
    let filteredString = filteredStringArray.join('');
    return filteredString;
}

// Do not edit below this line
module.exports = palindromes;
