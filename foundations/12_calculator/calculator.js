const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numberArray) {
	return numberArray.reduce((accumulator, current) => accumulator + current, 0);
};

const multiply = function(numberArray) {
  return numberArray.reduce((accumulator, current) => accumulator * current, 1);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(number) {
	let product = 1;
  for (let i = number; i > 1; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
