/*
Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
Example string : 'the quick brown fox'

Expected Output : 'The Quick Brown Fox '
*/

const capitalizeFirstLetters = function (string) {
  let stringAsArray = string.split(" ")
  let formattedStringBuilder = []

  //Loops through each word in the array making updates which are pushed to temp array
  for(let i = 0 ; i<stringAsArray.length ; i++) {
    let updatedWord = stringAsArray[i].charAt(i[0]).toUpperCase() + stringAsArray[i].substring(1).toLowerCase()
    formattedStringBuilder.push(updatedWord)
  }
  
  //Rejoins the updated array into a string
  let formattedSentence = formattedStringBuilder.join(" ")
  return formattedSentence
}

capitalizeFirstLetters("capitalize the first letters of these words");
//==>"Here Is A String To Capitalize"
