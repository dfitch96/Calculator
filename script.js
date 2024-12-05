
// OPERATORS
const ADD = '+';
const SUB = '-';
const MUL = '*';
const DIV = '/';
const POW = '^';
const FACT = '!';


function operate(operator, op1, op2){

    switch(operator){
        case ADD:
            return add(op1, op2);
        case SUB:
            return subtract(op1, op2);
        case MUL:
            return multiply(op1, op2);
        case DIV:
            return divide(op1, op2);
        case POW:
            return power(op1, op2);
    }


}



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


