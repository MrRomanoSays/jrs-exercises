/*
Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*/


const primeNumberChecker = function (initialNumber) {

  const divideBy = function (initialNumber, number) {
    if (number === 1) {
      console.log(initialNumber + " is a prime number.")
      return
    } else if (initialNumber % number === 0) {
      console.log(initialNumber + " is not a prime number.")
      return
    } else {
      divideBy(initialNumber, number-1)
    }
  }
  
  if (initialNumber < 0) {
   console.log("Negative numbers are not allowed")
   return 
  } else if (initialNumber === 0) {
    console.log("Zero is not a prime number")
    return           
  } else if (initialNumber % 1 != 0) {
    console.log("Only whole numbers are accepted in this function")
    return
  } else {
    return divideBy(initialNumber, initialNumber-1)
  }
}

primeNumberChecker()
