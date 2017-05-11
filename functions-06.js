//4. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

const findTheLongestString = function (string) {
    
var punctuation = string.includes(".") || string.includes("!") || string.includes(",") || string.includes("?") || string.includes("-") || string.includes("_") || string.includes("$") || string.includes("@") || string.includes("%") || string.includes("&") || string.includes("(") || string.includes(")") || string.includes("#") || string.includes("'")
  
  if (!string.includes(" ")) {
  
    console.log("Your string is a single word.  That means your string is the longest word.  Its length is " + string.length + " characters.")  
    return "Your string is a single word.  That means your string is the longest word.  Its length is " + string.length + " characters."
    
    } else if (punctuation) {
        alert("Your string contained punctuation other than quotation marks around the string itself.  \n\nPlease re-enter your string without any internal punctuation to ensure an accurate count.  \n\nEx: Incorrect: \"The robot's accessories came with directions didn't they?\" \tCorrect: \"The robots accessories came with directions didnt they\"")
        var fixString = prompt("Enter your string again, this time without internal punctuation.")
        
        return findTheLongestString(fixString)
      
    } else {
      var stringAsArray = string.split(" ")
      var longestWord = [""]
      stringAsArray.map(word => word.length>longestWord[0].length ? longestWord=[word] : null)
    }
    console.log("The longest word is \"" + longestWord + "\"")
    return "The longest word is \"" + longestWord + "\""
}

//Testing
//findTheLongestString("word")
//findTheLongestString("Find the longest word in this string!")
//findTheLongestString("Web Development Tutorial")

//  Remaining issue to fix at a later date:
//findTheLongestString("Testing@Punctuation")
