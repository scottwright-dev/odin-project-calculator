// --- BASIC CALCULATION FUNCTIONS ---

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => {
    if (num2 === 0) {
      return "Error";
    }
    return num1 / num2;
  };
  

// --- INITIAL CALCULATOR VARIABLES ---

const num1 = null;
const num2 = null;
const operator = '';
display.textContent = '0';

  // --- USER INPUT VARIABLES ---

  let userNum1 = null;
  let userNum2 = null;
  let userOperatorSelection = null;

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
      const numericValue = event.target.dataset.value;
      const display = document.querySelector("#display");
  
      if (userNum1 === null) {
        userNum1 = numericValue;
        display.textContent = userNum1;
      } else if (userOperatorSelection === null) {
        userNum1 += numericValue;
        display.textContent = userNum1;
      } else if (userNum2 === null) {
        userNum2 = numericValue;
        display.textContent = userNum2;
      } else {
        userNum2 += numericValue;
        display.textContent = userNum2;
      }
    });
  });

const operatorButtons = document.querySelectorAll(".operators");

operatorButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      if (userNum1 !== null && userNum2 !== null && userOperatorSelection !== null) {
        const result = operate(Number(userNum1), Number(userNum2), userOperatorSelection);
        if (result === "Error") {
          display.textContent = "Nope";
        } else {
          display.textContent = result;
          userNum1 = result;
          userNum2 = null;
        }
      }
      userOperatorSelection = event.target.id;
    });
  });

const equalsButton = document.querySelector("#equals-btn");

equalsButton.addEventListener('click', (event) => {
    if (userNum1 !== null && userNum2 !== null && userOperatorSelection !== null) {
        const result = operate(Number(userNum1), Number(userNum2), userOperatorSelection);
        if (result === "Error") {
          display.textContent = "Nope";
        } else {
          display.textContent = result;
          userNum1 = result;
          userNum2 = null;
          userOperatorSelection = null;
        }
    }
  });
  

    const clearButton = document.querySelector("#clear-btn");

clearButton.addEventListener('click', (event) => {
        display.textContent = '0';
        userNum1 = null;
        userNum2 = null;
        userOperatorSelection = null;
    });


