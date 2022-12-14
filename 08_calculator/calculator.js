const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(x) {
	let total = 0;
  for (let num in x){
    total += x[num];
  }
  return total;
};

const multiply = function(numbers) {
  total = numbers[0];
  for (let i = 1; i < numbers.length; i++) total *= numbers[i];
  return total;
};

const power = function(x, y) {
  total = 1;
	for (let i = 0; i < y; i++) total *= x;
  return total;
};

const factorial = function(x) {
  if (x === 0) return 1;
	let total = 1;
  for (let i = x; i > 0; i--) total *= i;
  return total;
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
