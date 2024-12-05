
// OPERATORS
const ADD = '+';
const SUB = '-';
const MUL = '*';
const DIV = '/';
const POW = '^';
const FACT = '!';

function add (a=0, b=0) {
    return a + b;
};

function subtract(a=0, b=0) {
  return a - b;
};

function multiply(a=0, b=0) {
  return a * b;
};


function divide(a=0, b=1){
    if(b === 0){
        return NaN;
    }

    return a / b;

}

function power(base, power) {
	return Math.pow(base, power);
};


function factorial(n) {
  let product = 1;
  for(let i = n; i > 1; i--){
    product *= i;
  }

  return product;
};


