let currentInput = "";
let previousInput = "";
let operator = "";

function appendNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

function setOperator(op) {
    if (currentInput === "") return;
    operator = op;
    previousInput = currentInput;
    currentInput = "";
    updateDisplay("");
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateDisplay("");
}

function calculateResult() {
    if (currentInput === "" || previousInput === "") return;
    let result = 0;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    switch (operator) {
        case "+":
            result = prev + curr;
            break;
        case "-":
            result = prev - curr;
            break;
        case "*":
            result = prev * curr;
            break;
        case "/":
            result = curr !== 0 ? prev / curr : "Error";
            break;
        default:
            return;
    }

    currentInput = result.toString();
    previousInput = "";
    operator = "";
    updateDisplay(currentInput);
}

function updateDisplay(value) {
    const display = document.getElementById("display");
    display.textContent = value || "0";
}
