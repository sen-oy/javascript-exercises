const fibonacci = function(index) {
    let fibonacciArray = [1, 1];
    index = parseInt(index);
    if (index < 0 ) {
        return 'OOPS';
    } else if (index === 0) {
        return 0;
    } else if (index < 3) {
        return index == 1 ? fibonacciArray[0] : fibonacciArray[1];
    } else {
        for (let i = 2; i < index; i++) {
            fibonacciArray.push(fibonacciArray[i - 2] + fibonacciArray[i - 1]);
        }
        return fibonacciArray[index - 1];
    }

};

// Do not edit below this line
module.exports = fibonacci;
