const display = document.getElementById("basic-display");
const buttons = document.querySelectorAll(".btn");
const operators = ["+", "-", "*", "/"];


buttons.forEach(button => {
    button.addEventListener("click", () => {       
        const value = button.dataset.value;
        const lastChar = display.value.slice(-1);
        const currentIsOperator = operators.includes(value);
        const lastIsOperator = operators.includes(lastChar);

        if (currentIsOperator && lastIsOperator) {
            display.value = display.value.slice(0, -1) + value;
        } else if (value === (".")) {
            const numbers = display.value.split(/[+\-*/]/);
            const currentNumber = numbers[numbers.length - 1];

            if (!currentNumber.includes(".")) {
                display.value += value;
            } 
        } else if (value) {
            const numbers = display.value.split(/[+\-*/]/);
            const currentNumber = numbers[numbers.length - 1];

            if (currentNumber === "0") {
                display.value = display.value.slice(0, -1) + value;
            } else {
                display.value += value;
            }
        }
    });
});



const clearButton = document.getElementById("clear");

clearButton.addEventListener("click", () => {
    display.value = "";
});

const deleteButton = document.getElementById("delete");

deleteButton.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
    
});

const equalsButton = document.getElementById("equals");

equalsButton.addEventListener("click", () => {
    const expression = display.value;

    if (expression.includes("+")) {
        display.value = add(expression);
    } else if (expression.includes("-")) {
        display.value = subtract(expression);
    } else if (expression.includes("/")) {
        display.value = divide(expression);
    } else if (expression.includes("*")) {
        display.value = multiply(expression);
    }
});

const add = expression => {
    const [num1, num2] = getNumbers(expression, "+");
    return num1 + num2;
};

const subtract = expression => {
    const [num1, num2] = getNumbers(expression, "-");
    return num1 - num2;
};

const divide = expression => {
    const [num1, num2] = getNumbers(expression, "/");
    return num1 / num2;
};

const multiply = expression => {
    const [num1, num2] = getNumbers(expression, "*");
    return num1 * num2;
};

const getNumbers = (expression, operator) => {
    const parts = expression.split(operator);
    return parts.map(number => parseFloat(number));
};