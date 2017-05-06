// 9. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

const multiplyAndDivide = function () {
  let number1 = prompt("Input your first number.")
  let number2 = prompt("Input your second, and final, number.")
  let numbersMultiplied = number1*number2
  let numbersDivided = number1/number2
  return alert(
    number1 + " multiplied by " + number2 + " is " + numbersMultiplied + 
    "\n" + number1 + " divided by " + number2 + " is " + numbersDivided
  )
}

multiplyAndDivide()
