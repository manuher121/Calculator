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
            return "TRYAGAIN :/"
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
window.addEventListener('keydown', function(e) {
    const key = document.querySelector(`button[data-key= "${e.keyCode}"]`);
    if (!key) {
        return;
    }
    document.getElementById(`${key.textContent}`).click();
})

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
            oldNumber = 0;
            currentOperator = "";
            displayNumber();
        }
        else if (buttonSymbols.textContent == "+"){ 
            checkForCurrentOperator(buttonSymbols.textContent)
        }
        else if (buttonSymbols.textContent == "-") {
            checkForCurrentOperator(buttonSymbols.textContent)
        }
        else if (buttonSymbols.textContent == "/") {
            checkForCurrentOperator(buttonSymbols.textContent)
        }
        else if (buttonSymbols.textContent == "*") {
            checkForCurrentOperator(buttonSymbols.textContent)
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

function checkForCurrentOperator(e) {
    if (currentOperator != "") {
        numberToDisplay = operate(Number(oldNumber), Number(numberToDisplay), currentOperator);
        currentOperator = e;
        displayNumber();
        oldNumber = numberToDisplay;
        numberToDisplay = 0;
    }
    else {
        oldNumber = numberToDisplay;
        currentOperator = e;
        numberToDisplay = 0;
        displayNumber
    }
}

displayNumber();