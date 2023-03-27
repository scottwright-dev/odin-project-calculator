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

const operate = function(num1, num2, operator) {
    if (operator === '+') {
       return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
      }  else if (operator === '/') {
        return divide(num1, num2);
    }
};