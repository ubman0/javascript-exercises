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
  var multTotal = numbers.reduce((total, number) => {
    return multTotal * number;
  },0);
};

const power = function(x, y) {
  total = 1;
	for (let i = 0; i < y; i++) {total *= x};
  return total;
};

const factorial = function() {
	
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
