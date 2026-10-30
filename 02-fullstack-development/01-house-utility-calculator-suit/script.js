const display = document.getElementById("basic-display");

const buttons = document.querySelectorAll(".btn");

console.log(buttons);

buttons.forEach(button => {
    button.addEventListener("click", () => {
        display.value += button.dataset.value;
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

