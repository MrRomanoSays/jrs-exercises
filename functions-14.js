/*
Write a JavaScript function to extract unique characters from a string.
Example string : "thequickbrownfoxjumpsoverthelazydog"

Expected Output : "thequickbrownfxjmpsvlazydg"
*/

//Issues: requires lowercase letters and wouldn't remove spaces
//Addressed in V2 Below
const uniqueCharacters = function (string) {
    let arrayOfUniqueCharacters = []
    let stringAsArray = string.split("")

    //Original version treats capital and lowercase letters as different unique.
stringAsArray.map(letter => !arrayOfUniqueCharacters.includes(letter) ? arrayOfUniqueCharacters.push(letter) : null)

    return arrayOfUniqueCharacters.join("")
}

//uniqueCharacters("thequickbrownfoxjumpsoverthelazydog")


///////////////////////
//Version2 converts all letters to lowercase to ignore input value's casing
//Version2 removes any spaces from input string

const uniqueCharactersV2 = function (string) {
    let stringAllLowerCaseLetters = string.toLowerCase()
    let stringAllLowerCaseAndWithoutSpaces = stringAllLowerCaseLetters.replace(/ /g , "");

    let stringAsArray = stringAllLowerCaseAndWithoutSpaces.split("")
    let arrayOfUniqueCharacters = []

    //Original version treats capital and lowercase letters as different unique.
stringAsArray.map(letter => !arrayOfUniqueCharacters.includes(letter) ? arrayOfUniqueCharacters.push(letter) : null)

    return arrayOfUniqueCharacters.join("")
}

//uniqueCharactersV2("thequickbrownfoxjumpsoverthelazydoGG")
// ==> "thequickbrownfxjmpsvlazydg"
uniqueCharactersV2("thequickbrownfoxjumpsoverthelazy doGG")
// ==> "thequickbrownfxjmpsvlazydg"
