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
        const parts = expression.split("+");
        
        const firstNumber = parts[0];
        const secondNumber = parts[1];

        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);

        const result = num1 + num2;

        display.value = result;
    }

    if (expression.includes("-")) {
        const parts = expression.split("-");

        const firstNumber = parts[0];
        const secondNum = parts[1];

        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNum);

        const result = num1 - num2;

        display.value = result;
    }

    if (expression.includes("/")) {
        const parts = expression.split("/");

        const firstNumber = parts[0];
        const secondNumber = parts[1];

        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);

        const result = num1 / num2;

        display.value = result;
    }

    if (expression.includes("*")) {
        const parts = expression.split("*");

        const firstNumber = parts[0];
        const secondNumber = parts[1];

        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);

        const result = num1 * num2;

        display.value = result;
    }

});

