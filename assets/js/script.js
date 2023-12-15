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

  // When pressed enter
  document.getElementById("answer-box").addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
      checkAnswer();
    }

  })

  runGame("addition");
})



/**
 * the main game "loop" called when the script is loaded 
 * and after the users answer has been processed
 */

function runGame(gameType) {

  // Get rid of the current answer
  document.getElementById("answer-box").value = "";

  // when the page is loaded up the cursor is active  
  document.getElementById("answer-box").focus();



  // Creates two random numbers
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;



  if (gameType === "addition") {
    displayAdditionQuestion(num1, num2);
  } else if (gameType === "multiply") {
    displayMultiplyQuestion(num1, num2);
  } else if (gameType === "subtract") {
    displaySubtractQuestion(num1, num2)
  } else if (gameType === "division") {
    displayDivisionQuestion(num1, num2)
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
    alert("Well done!");
    incrementScore();
  } else {
    alert(`Wrong It is ${calculatedAnswer[0]}`);
    incrementWrongAnswer();
  }

  runGame(calculatedAnswer[1]);
}


function calculateCorrectAnswer() {

  let operand1 = parseInt(document.getElementById('operand1').innerText)
  let operand2 = parseInt(document.getElementById('operand2').innerText)
  let operator = document.getElementById('operator').innerText;

  if (operator === "+") {
    return [operand1 + operand2, "addition"]
  } else if (operator === "x") {
    return [operand1 * operand2, "multiply"]
  } else if (operator === "-") {
    return [operand1 - operand2, "subtract"]
  } else if (operator === "%") {
    return [operand1 / operand2, "division"]
  } else {
    alert(`Unimplemented operator ${operator}`)
    throw (`Unimplemented ${operator} aborting`)
  }

}

/**
 * get the current score and add 1 to it
 */
function incrementScore() {

  let oldScore = parseInt(document.getElementById('score').innerText);
  document.getElementById("score").textContent = ++oldScore


}


/**
 * get the current score add 1 to it (wrong answer)
 */
function incrementWrongAnswer() {

  let oldScore = parseInt(document.getElementById('incorrect').innerText);
  document.getElementById("incorrect").textContent = ++oldScore
}


function displayAdditionQuestion(operand1, operand2) {
  document.getElementById('operand1').textContent = operand1;
  document.getElementById('operand2').textContent = operand2;
  document.getElementById('operator').textContent = "+";

}


/**
 * Added a tenary operator (If else statement.)
 * if operand1 is bigger than operand2 return operand 1 
 * if operand1 is bigger than operand2 return operand 2
 */
function displaySubtractQuestion(operand1, operand2) {

  document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
  document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
  document.getElementById('operator').textContent = "-";

}

function displayMultiplyQuestion(operand1, operand2) {

  document.getElementById('operand1').textContent = operand1;
  document.getElementById('operand2').textContent = operand2;
  document.getElementById('operator').textContent = "x";

}

function displayDivisionQuestion(operand1, operand2) {

  operand1 = operand1 * operand2;

  document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
  document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
  document.getElementById('operator').textContent = "%";

}