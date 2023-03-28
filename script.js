// --- BASIC CALCULATION FUNCTIONS ---

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

// --- INITIAL CALCULATOR VARIABLES ---

const num1 = 0;
const num2 = 0;
const operator = '';
display.textContent = '0';

// --- OPERATE FUNCTION ----

const operations = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide
};

const operate = function(num1, num2, operator) {
    return operations[operator](num1, num2);
};

// --- BUTTON EVENT LISTENERS ----

const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach(button => {
  button.addEventListener("click", (event) => {
    const numericValue = parseInt(event.target.dataset.value);
    const display = document.querySelector("#display");

    if (userNum1 === null) {
      userNum1 = numericValue;
      display.textContent = userNum1;
    } else {
      if (userNum2 === null) {
        userNum2 = numericValue;
        display.textContent = userNum2;
      } else {
        userNum2 += numericValue;
        display.textContent = userNum2;
      }
    } 
  });
});


const operatorButtons = document.querySelectorAll(".operators");

operatorButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        userOperatorSelection = event.target.id;
        
    })
});

const equalsButton = document.querySelector("#equals-btn");

equalsButton.addEventListener('click', (event) => {
    display.textContent =  operate(userNum1, userNum2, userOperatorSelection);
    });

    const clearButton = document.querySelector("#clear-btn");

clearButton.addEventListener('click', (event) => {
        display.textContent = '0';
        userNum1 = null;
        userNum2 = null;
        userOperatorSelection = null;
    });

    // --- USER INPUT VARIABLES ---

    let userNum1 = null;
    let userNum2 = null;
    let userOperatorSelection = null;

