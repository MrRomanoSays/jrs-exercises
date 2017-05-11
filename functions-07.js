/*
7.  Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.

Example string : 'The quick brown fox'
Expected Output : 5
*/

const vowelCounter = function (string) {
const vowels = ["a", "e", "i", "o", "u"]  
let stringAsArray = string.split("")
let numberOfVowels = 0

  for(let i in vowels) {
    stringAsArray.map( letter => letter.toLowerCase() === vowels[i] ? count+=1 : null )
  }
  console.log(count)
  return numberOfVowels
}

vowelCounter("How many vowels are in this sentence?")
