// --- BASIC CALCULATION FUNCTIONS ---

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

// --- INITIAL CALCULATOR VARIABLES ---

const num1 = 0;
const num2 = 0;
const operator = '';
const displayValue = 0;

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
        } else {
            userNum1 += numericValue;
            display.textContent = userNum1;
        }
    })
});

const operatorButtons = document.querySelectorAll(".operators");

operatorButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        userOperatorSelection = event.target.id;
        
    })
});

const equalsButton = document.querySelector("#equals-btn");

equalsButton.addEventListener('click', (event) => {
        const equalsButtonId = event.target.id;
    });

    const clearButton = document.querySelector("#clear-btn");

clearButton.addEventListener('click', (event) => {
        const clearsButtonId = event.target.id;
    });

    // --- USER INPUT VARIABLES ---

    let userNum1 = null;
    let userNum2 = null;
    let userOperatorSelection = null;

