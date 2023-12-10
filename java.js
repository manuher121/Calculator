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

let numberToDisplay = 0;

let content = document.getElementById("resultDisplay");

const buttons = document.querySelectorAll(".number");


function displayNumber() {
    if (numberToDisplay > 999999999999) {
        content.textContent="ERROR";

    }
    else {
        content.textContent=numberToDisplay;
    }
}

///numbersButton.onclick = function() {
///    console.log(numbersButton.textContent);
///}
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      // do something when the button is clicked
      console.log(button.textContent);
    });
  });






function changeNumbers(onClickNumber) {
    if (numberToDisplay == 0) {
        numberToDisplay = onClickNumber;
    }
    else {
        return numberToDisplay + onClickNumber
    }
}




displayNumber();