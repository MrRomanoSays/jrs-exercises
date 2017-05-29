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


/*
Different example from Free Code Camp (FCC) Curriculum

Directions from FCC:
Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note:
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

*/

function palindrome(str) {
  var lowerCaseString = str.toLowerCase();
  var formattedString = lowerCaseString.replace(/[!@#$%^&*()_+,.:;'"?/|\-\s]/g, "");
  var reversedString = formattedString.split("").reverse().join("");
  if (formattedString === reversedString) {
    return true;
  }
  return false;
}

palindrome("eye");
