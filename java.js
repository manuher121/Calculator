let numberToDisplay = 0;
let oldNumber = 0;
let currentOperator = "";
let content = document.getElementById("resultDisplay");
const buttons = document.querySelectorAll(".number");
const buttonsSymbols = document.querySelectorAll(".symbol");


function add(firstNumber, secondNumber) {
    return(firstNumber + secondNumber);
}

function substract(firstNumber, secondNumber) {
    return(firstNumber - secondNumber);
}

function multiply(firstNumber, secondNumber) {
    return(firstNumber * secondNumber);
}

function divide(firstNumber, secondNumber) {
    return(Math.round((firstNumber / secondNumber) * 10) / 10);
}

function operate(firstNumber, secondNumber, operator) {
    if (operator == "+") {
        return add(firstNumber, secondNumber);
    }
    else if (operator == "-") {
        return substract(firstNumber, secondNumber);
    }
    else if (operator == "*") {
        return multiply(firstNumber, secondNumber);
    }
    else if (operator == "/") {
        if (firstNumber == 0 && secondNumber == 0) {
            return "TRYAGAIN"
        }
        else {
            return divide(firstNumber, secondNumber);
        }
    }
}

function displayNumber() {
    if (numberToDisplay > 999999999999) {
        content.textContent="ERROR";

    }
    else {
        content.textContent=numberToDisplay;
    }
}

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        if (numberToDisplay == 0) {
            numberToDisplay = button.textContent;
            displayNumber();
            console.log(button.textContent);
        }
        else {
            numberToDisplay = numberToDisplay + button.textContent;
            displayNumber();
            console.log(numberToDisplay);
        }
    });
  });

buttonsSymbols.forEach(function(buttonSymbols) {
    buttonSymbols.addEventListener("click", function() {
        if (buttonSymbols.textContent == "c") {
            numberToDisplay = 0;
            displayNumber();
        }
        else if (buttonSymbols.textContent == "+"){
            oldNumber = numberToDisplay;
            currentOperator = "+";
            numberToDisplay = 0;
            displayNumber();
        }
        else if (buttonSymbols.textContent == "-") {
            oldNumber = numberToDisplay;
            currentOperator = "-";
            numberToDisplay = 0;
            displayNumber();
        }
        else if (buttonSymbols.textContent == "/") {
            oldNumber = numberToDisplay;
            currentOperator = "/";
            numberToDisplay = 0;
            displayNumber();
        }
        else if (buttonSymbols.textContent == "*") {
            oldNumber = numberToDisplay;
            currentOperator = "*";
            numberToDisplay = 0;
            displayNumber();
        }
        else if (buttonSymbols.textContent == "=") {
            if (currentOperator == "") {
                displayNumber();
            }
            else {
                numberToDisplay = operate(Number(oldNumber), Number(numberToDisplay), currentOperator);
            displayNumber();
            }
        }
    })
});

displayNumber();