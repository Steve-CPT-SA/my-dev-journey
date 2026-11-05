const display = document.getElementById("basic-display");
const buttons = document.querySelectorAll("[data-value]");
const operators = ["+", "-", "*", "/"];
let hasError = false;

buttons.forEach(button => {
    button.addEventListener("click", () => {       
        const value = button.dataset.value;
        const lastChar = display.value.slice(-1);
        const currentIsOperator = isOperator(value);
        const lastIsOperator = isOperator(lastChar);
        const isDigit = !isOperator(value) && value !== ".";
        if (hasError) {
            if (isDigit) {
                display.value = value;
                hasError = false;
            }
            return;
        }
        if (currentIsOperator && lastIsOperator) {
            display.value = display.value.slice(0, -1) + value;
        } else if (value === (".")) {
            if (canAddDecimal()) {
                display.value += value;
            } 
        } else if (value) {
            if (isDigit) {
                handleLeadingZero(value);
            } else {
                display.value += value;
            }
        }
    });
});

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
    display.value = "";
    hasError = false;
});

const deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", () => {
    if (hasError) {
        display.value = "";
        hasError = false;
        return;
    }
    display.value = display.value.slice(0, -1);
});

const equalsButton = document.getElementById("equals");
equalsButton.addEventListener("click", () => {
    const expression = display.value;
    const lastChar = expression.slice(-1);
    if (hasError) {
        return;
    }
    if (isOperator(lastChar)) {
        return;
    }
    display.value = evaluateExpression(expression);
});

const getCurrentNumber = () => {
    const numbers= display.value.split(/[+\-*/]/);
    return numbers[numbers.length -1];
};

const isOperator = value => operators.includes(value);

const canAddDecimal = () => {
    const currentNumber = getCurrentNumber();
    return !currentNumber.includes(".");
};

const handleLeadingZero = value => {
    const currentNumber = getCurrentNumber();
    if (currentNumber === "0") {
        display.value = display.value.slice(0, -1) + value;
    } else {
        display.value += value;
    }
};

const evaluateExpression = expression => {
    const tokens = expression.split(/([+\-*/])/);
    let result = parseFloat(tokens[0]);
    for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const nextNumber = parseFloat(tokens[i + 1]);
        if (operator === "+") {
            result += nextNumber;
        } else if (operator === "-") {
            result -= nextNumber;
        } else if (operator === "*") {
            result *= nextNumber;
        } else if (operator === "/") {
            if (nextNumber === 0) {
                hasError = true;
                return "Error: Cannot divide by zero.";
            }
            result /= nextNumber;
        }
    }
    return result;
};