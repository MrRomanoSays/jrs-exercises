/*
7. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".
*/

const randomNumber = Math.floor(Math.random() * (10 - 1)) + 1


const guessMyRandomNumber = function (randomNumber) {
  const userGuess = prompt("Try to guess my number.\n\nIt's a whole number between 1 and 10.")
      if (userGuess === randomNumber.toString()) {
        return alert("Good Work!")
      } else {
        if (confirm("Not matched.\n\nWould you like to try again?")) {
          guessMyRandomNumber(randomNumber)
        } else {
          return alert("Better luck next time")
        }
      }
}

guessMyRandomNumber(randomNumber);
