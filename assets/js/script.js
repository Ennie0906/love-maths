// Wait for the DOM to load up the page
// Get the button elements and add event listeners
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button")

  for (let button of buttons) {
    button.addEventListener('click', function () {
      if (this.getAttribute('data-type') === 'submit') {
        checkAnswer();
      } else {
        let gameType = this.getAttribute("data-type");
        runGame(gameType);
      }


    })
  }
  runGame("addition");
})



/**
 * the main game "loop" called when the script is loaded 
 * and after the users answer has been processed
 */

function runGame(gameType) {

  // Creates two random numbers
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;



  if (gameType === "addition") {
    displayAdditionQuestion(num1, num2);
  } else {
    alert(`Unknown gameType: ${gameType}`);
    throw (`Unknown gameType: ${gameType} Abrotijnb!`);
  }
}


/**
 * check the answer agaisnt the first element in
 * the returned calculateCorrectAnswer
 */
function checkAnswer() {

  let userAnswer = parseInt(document.getElementById("answer-box").value);
  let calculatedAnswer = calculateCorrectAnswer();
  let isCorrect = userAnswer === calculatedAnswer[0];

  if (isCorrect) {
    alert("Well done dip shit");
  } else {
    alert(`Fucking idiot. It is ${calculatedAnswer[0]}`);
  }

  runGame(calculatedAnswer[1]);
}


function calculateCorrectAnswer() {

  let operand1 = parseInt(document.getElementById('operand1').innerText)
  let operand2 = parseInt(document.getElementById('operand2').innerText)
  let operator = document.getElementById('operator').innerText;

  if (operator === "+") {
    return [operand1 + operand2, "addition"]
  } else {
    alert(`Unimplemented operator ${operator}`)
    throw (`Unimplemented ${operator} aborting`)
  }

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
  document.getElementById('operand1').textContent = operand1;
  document.getElementById('operand2').textContent = operand2;
  document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}