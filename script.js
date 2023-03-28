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

// --- EVENT LISTENERS ----

const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const numericValue = event.target.dataset.value;
        const display = document.querySelector("#display");
        display.textContent += numericValue;
    })
});

const operatorButtons = document.querySelectorAll(".operators");

operatorButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const operatorValue = event.target.id;
        console.log(operatorValue);
    })
});

const equalsButton = document.querySelector("#equals-btn");

equalsButton.addEventListener('click', (event) => {
        const equalsButtonId = event.target.id;
        console.log(equalsButtonId);
    });

    const clearButton = document.querySelector("#clear-btn");

clearButton.addEventListener('click', (event) => {
        const clearsButtonId = event.target.id;
        console.log(clearsButtonId);
    });