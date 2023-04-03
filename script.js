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
  let equalsPressed = false; 

// --- OPERATE FUNCTION ----
// Function to perform arithmetic operations based on the selected operator.

const operations = {
    'plus': add,
    'minus': subtract,
    'multiply': multiply,
    'divide': divide
};

const operate = (num1, num2, operator) => {
  const result = operations[operator](num1, num2);
  if (result === "Error") {
      return result;
  }
  return Number(result.toFixed(8));
};



// --- BUTTON EVENT LISTENERS ----
// Event listeners for number and operator buttons, and equals button.

const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach(button => {
    button.addEventListener("click", (event) => {
      const numericValue = event.target.dataset.value;
      const display = document.querySelector("#display");

// Limit input to 9 digits
    if (display.textContent.length >= 9) {
        return;
        }

// If equalsPressed is true, reset user input variables and the display
    if (equalsPressed) {
        userNum1 = null;
        userNum2 = null;
        userOperatorSelection = null;
        equalsPressed = false;
        display.textContent = '';
      }

      display.textContent += numericValue;

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

      // If equalsPressed is true, reset the equalsPressed flag
      if (equalsPressed) {
        equalsPressed = false;
      }

      // Check if both operands and the operator have been selected.
      // Perform the selected operation and update the display.
      // Reset the first operand to the result and clear the second operand.
      // Save the selected operator for future calculations.
      if (userNum1 !== null && userNum2 !== null && userOperatorSelection !== null) {
          const result = operate(Number(userNum1), Number(userNum2), userOperatorSelection);
          if (result === "Error") {
              display.textContent = "Nope";
          } else {
              // this stops display overflow issue
              display.textContent = String(result).slice(0, 9);
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
    equalsPressed = true;
    if (userNum1 !== null && userNum2 !== null && userOperatorSelection !== null) {
      const result = operate(Number(userNum1), Number(userNum2), userOperatorSelection);
      if (result === "Error") {
          display.textContent = "Nope";
      } else {
          display.textContent = String(Number(result.toFixed(8))).slice(0, 9);
          userNum1 = Number(result.toFixed(8));
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

const deleteButton = document.querySelector("#delete-btn");

deleteButton.addEventListener("click", (event) => {
  if (userNum2 !== null) {
    userNum2 = userNum2.slice(0, -1);
    if (userNum2 === "") {
      display.textContent = "0";
    } else {
      display.textContent = userNum2;
    }
  } else if (userOperatorSelection !== null) {
    userOperatorSelection = null;
    display.textContent = userNum1;
  } else if (userNum1 !== null) {
    userNum1 = userNum1.slice(0, -1);
    if (userNum1 === "") {
      display.textContent = "0";
    } else {
      display.textContent = userNum1;
    }
  }
});

    