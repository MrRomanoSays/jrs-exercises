//Write a JavaScript function that reverses a number.

const reverseNumber = function (number) {

    let numberAsString = number.toString()
    let numberAsArray = numberAsString.split("")
    let reversedNumberAsArray = numberAsArray.reverse()
    let reversedNumberAsString = reversedNumberAsArray.join("")
    
    return reversedNumberAsString
    
}

reverseNumber(123)

//delete this line.
