
// OPERATORS
const ADD = '+';
const SUB = '-';
const MUL = '*';
const DIV = '/';
const POW = '^';
const FACT = '!';
const DECIMAL_PLACES = 100000000000

// EXPRESSION
let op1 = "";
let op2 = "";
let operator = "";


const display = document.querySelector("#display");
const main = document.querySelector("main");

main.addEventListener("click", (e) => {
    
    let classList = e.target.classList;
    if(classList.contains("digit")){
        storeDigit(e.target.textContent);
        populateDisplay();
    } else if(classList.contains("clear")){
        resetDisplay();
        resetExpression();
    } else if(classList.contains("operator")){
        setOperator(e.target.textContent);
    } else if(classList.contains("equals")){
        evaluate();
    }

})

function evaluate(){
    // if setResult was successful, populate the display
    // otherwise reset the expression and display an ERROR
    if(setResult()){
        populateDisplay();
    } else{
        resetExpression();
        setDisplay('ERROR');
    }
}


function setResult(){
    console.log("method: setResult");

    if (!op1 || !op2 || !operator){
        return false;
    } 
    
    let result = operate(operator, parseInt(op1), parseInt(op2));

    if(result === -1){
        return false;
    }

    op1 = Math.round(result * DECIMAL_PLACES) / DECIMAL_PLACES;
    op2 = ''
    operator = '';

    return true;
}

function setOperator(op){
    console.log("method: setOperator, op: " + op);
    if(!operator){
        operator = op;
    } else{
        evaluate();
        operator = op;
    }
    
}

function storeDigit(digit){
    console.log("method: storeDigit, digit: " + digit);
    if(!operator){
        op1 += digit;
    } else{
        op2 += digit;
    }

}


function setDisplay(text){
    display.textContent = text;
}

function resetDisplay(){
    console.log("method: resetDisplay");
    display.textContent = '0';
}

function resetExpression(){
    console.log("method: resetExpression");
    op1 = '';
    op2 = '';
    operator = '';
}

function populateDisplay(){
    console.log("method: populateDisplay");
    if(!operator){
        display.textContent = op1;
    } else{
        display.textContent = op2;
    }
}


function operate(operator, op_1, op_2){
    console.log("method: operate");
   
    switch(operator){
        case ADD:
            return add(op_1, op_2);
        case SUB:
            return subtract(op_1, op_2);
        case MUL:
            return multiply(op_1, op_2);
        case DIV:
            return divide(op_1, op_2);
        case POW:
            return power(op_1, op_2);
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
        return -1;
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


