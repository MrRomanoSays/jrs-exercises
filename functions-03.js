/* 
3. Write a JavaScript function that returns a passed string with letters in alphabetical order.
Assume punctuation and numbers symbols are not included in the passed string.

Example string : 'webmaster'
Expected Output : 'abeemrstw'
*/

const value = "webmaster"

const alphabetize = function (word) {
    return word.split("").sort().join("")
}

// As an arrow function
const alphabetizeArrowFunction = word => word.split("").sort().join("")

//alphabetize(value) //==> "abeemrstw"
alphabetizeArrowFunction(value) //==> "abeemrstw"
