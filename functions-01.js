//Write a JavaScript function that reverses a number.

const reverseNumber = function (number) {

    let numberAsString = number.toString()
    let numberAsArray = numberAsString.split("")
    let reversedNumberAsArray = numberAsArray.reverse()
    let reversedNumberAsString = reversedNumberAsArray.join("")
    let convertStringToNumber = +reversedNumberAsString

    return convertStringToNumber
    
}

reverseNumber(123)
