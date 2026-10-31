const display = document.getElementById("basic-display");

const buttons = document.querySelectorAll(".btn");
console.log(buttons);

buttons.forEach(button => {
    button.addEventListener("click", () => {       
        const value = button.dataset.value;
        console.log(value);

        if (value) {
            display.value += value; 
        } else {
            console.log("");
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
    }

    if (expression.includes("-")) {
        display.value = subtract(expression);
    }

    if (expression.includes("/")) {
        display.value = divide(expression);
    }

    if (expression.includes("*")) {
        display.value = multiply(expression);
    }

});

const add = expression => {
    const [num1, num2] = getNumbers(expression, "+");
    return num1 + num2;
};

const subtract = expression => {
    const parts = expression.split("-");
    const firstNumber = parts[0];
    const secondNum = parts[1];
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNum);
    const result = num1 - num2;
    return result;
};

const divide = expression => {
    const parts = expression.split("/");
    const firstNumber = parts[0];
    const secondNumber = parts[1];
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    const result = num1 / num2;
    return result;
}

const multiply = expression => {
    const parts = expression.split("*");
    const firstNumber = parts[0];
    const secondNumber = parts[1];
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    const result = num1 * num2;
    return result;
}

const getNumbers = (expression, operator) => {
    const parts = expression.split(operator);
    return parts.map(number => parseFloat(number));
}