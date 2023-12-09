function add(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}

function substract(firstNumber, secondNumber) {
    console.log(firstNumber - secondNumber);
}

function multiply(firstNumber, secondNumber) {
    console.log(firstNumber * secondNumber);
}

function divide(firstNumber, secondNumber) {
    console.log(firstNumber / secondNumber);
}

function operate(firstNumber, secondNumber, operator) {
    if (operator == "+") {
        add(firstNumber, secondNumber);
    }
    else if (operator == "-") {
        substract(firstNumber, secondNumber);
    }
    else if (operator == "*") {
        multiply(firstNumber, secondNumber);
    }
    else if (operator == "/") {
        divide(firstNumber, secondNumber);
    }
    else {
        console.log("Operator not recognized");
    }
}