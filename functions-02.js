//  Write a JavaScript function that checks whether a passed string is palindrome or not.
//  Adjusted this task to include numbers as well as an error message about checking inputs short than 3 in length.

const palindromeChecker = function (palindrome) {
    // Converion allows for numbers to be checked and ensures random capital letters do not break checker
    var palindrome = palindrome.toString().toLowerCase()
    
    // Taking a personal stand against the argument that a palindrome can still be a palindrome if it is less than 3 values in length. #BetterTomorrow
    if (palindrome.length <= 2) {
        return "Maybe this is just my opinion, but a palindrome should be longer than 2 values."
    } else {
        for (var i = 1 ; i <= palindrome.length/2 ; i++) {
           if(palindrome[i-1] === palindrome[palindrome.length-i]) {
           console.log("Checking values ... "
           + palindrome[i-1] + " matches " + palindrome[palindrome.length-i] + " ... ")
           console.log("The middle value always matches")
            } else {
            console.log("The values do not match.  This is not a palindrome.")
            return false
            }
            console.log("The values match.  This is a palindrome.")
            return true
        }
    }
}

//Testing:
//palindromeChecker("Animal loots foliated detail of stool lamina") //==> true
//palindromeChecker(12321) //==> true
//palindromeChecker("J") //==>error message
