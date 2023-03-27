// --- BASIC CALCULATION FUNCTIONS ---

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

// --- INITIAL CALCULATOR VARIABLES ---

const num1 = 0;
const num2 = 0;
const operator = '';

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
    button.addEventListener("click", () => {
        const numericValue = button.dataset.value;
        const display = document.querySelector("#display");
        display.textContent += numericValue;
        console.log(display);
    })
})