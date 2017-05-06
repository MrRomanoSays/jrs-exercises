// 9. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

const multiplyAndDivide = function (number1, number2) {
let numbersMultiplied = number1*number2;
let numbersDivided = number1/number2;
return number1 + " multiplied by " + number2 + " is " + numbersMultiplied + "\n"
+ number1 + " divided by " + number2 + " is " + numbersDivided
}


//Incorporate alert and/or confirm for directions to user. 
//Incorporate prompt to set input from user.
multiplyAndDivide(10, 2)
