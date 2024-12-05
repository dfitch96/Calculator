
// OPERATORS
const ADD = '+';
const SUB = '-';
const MUL = '*';
const DIV = '/';
const POW = '^';
const FACT = '!';

let op1 = "";
let op2 = "";
let operator = "";


const display = document.querySelector("#display");


const main = document.querySelector("main");
main.addEventListener("click", (e) => {
    
    if(e.target.classList.contains("digit")){
        storeDigit(e.target.textContent);
        populateDisplay();
    } else if(e.target.classList.contains("clear")){
        resetDisplay();
    } else if(e.target.classList.contains("operator")){
        setOperator(e.target.textContent);
    }

    
})

function setOperator(op){
    console.log("method: setOperator, op: " + op);
    operator = op;
}

function storeDigit(digit){
    console.log("method: storeDigit, digit: " + digit);
    if(operator.length == 0){
        op1 += digit;
    } else{
        op2 += digit;
    }
    
}

function resetDisplay(){
    console.log("method: resetDisplay");
    display.textContent = '0';
    op1 = '';
    op2 = '';
    operator = '';
}

function populateDisplay(){
    console.log("method: populateDisplay");
    
    if(operator.length == 0){
        display.textContent = op1;
    } else{
        display.textContent = op2;
    }

}

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


