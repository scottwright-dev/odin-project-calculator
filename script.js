// --- BASIC CALCULATION FUNCTIONS ---

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
// Divide function includes error handling for dividing by 0.
const divide = (num1, num2) => {
    if (num2 === 0) {
      return "Error";
    }
    return num1 / num2;
  };

// --- USER INPUT VARIABLES ---

  let userNum1 = null;
  let userNum2 = null;
  let userOperatorSelection = null;

// --- OPERATE FUNCTION ----
// Function to perform arithmetic operations based on the selected operator.

const operations = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide
};

const operate = (num1, num2, operator) => operations[operator](num1, num2);

// --- BUTTON EVENT LISTENERS ----
// Event listeners for number and operator buttons, and equals button.

const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach(button => {
    button.addEventListener("click", (event) => {
      const numericValue = event.target.dataset.value;
      const display = document.querySelector("#display");

      display.value += numericValue;

// Handle user input for the first and second operand.
// Update the display with the current operand value.
  
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
// Check if both operands and the operator have been selected.
// Perform the selected operation and update the display.
// Reset the first operand to the result and clear the second operand.
// Save the selected operator for future calculations.
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
// Set the value of userOperatorSelection to the ID of the clicked operator button
      userOperatorSelection = event.target.id;
    });
  });

const equalsButton = document.querySelector("#equals-btn");

equalsButton.addEventListener('click', (event) => {
// Check if both operands and the operator have been selected.
// Perform the selected operation and update the display.
// Reset the first operand to the result and clear the second operand and operator.
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
// Clear the calculator display and reset all user input values and the selected operator.
        display.textContent = '0';
        userNum1 = null;
        userNum2 = null;
        userOperatorSelection = null;
    });

const decimalButton = document.querySelector("#decimal-btn");

decimalButton.addEventListener('click', (event) => {
        if (userOperatorSelection === null) {
            if (userNum1 === null) {
                userNum1 = '0.';
                display.textContent = userNum1;
            } else if (!userNum1.includes('.')) {
                userNum1 += '.';
                display.textContent = userNum1;
            }
        } else {
            if (userNum2 === null) {
                userNum2 = '0.';
                display.textContent = userNum2;
            } else if (!userNum2.includes('.')) {
                userNum2 += '.';
                display.textContent = userNum2;
            }
        }
    });
    