// 4. Write a JavaScript program to rotate the string 'codeisfun' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

const word = "codeisfun"

const rotateWord = function (word) {
  //Allows input to be reassigned
  let text = word
  //Prints to console original text
  console.log(word)
  //called every second, this function reassigns text with last letter as first letter + substring of the rest of the original phrase
  const rotater = function () {
    text = text.charAt(text.length-1) + text.substring(0, text.length - 1)
    console.log(text)
  }
  //Runs once a second, forever
  setInterval(rotater, 1000)
}

rotateWord(word)
