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

const multiply = function(x, y) {
  let res = 0;
  for (let num in x){
    res *= x[num];
  }
  return res;
};

const power = function() {
	
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
