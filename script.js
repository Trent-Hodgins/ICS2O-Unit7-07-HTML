// This line conects the function with the button.//
document.getElementById('multiply').addEventListener('click', calculate)

// These are for the variables.//
let firstNum = 0
let secondNum = 0
let counter = 0
let answer = 0

// These are for making the variables numbers instead of charaters.//
function calculate () {
  firstNum = document.getElementById('first').value
  secondNum = document.getElementById('second').value
  firstNum = parseInt(firstNum)
  secondNum = parseInt(secondNum)

  // These are for the actual multiplication. The counter is used for the multiplication because we are doing it by addition.//
  for (counter = 0; counter < firstNum; counter++) {
    answer = answer + secondNum
  }
  document.getElementById('answer').innerHTML = answer
}
