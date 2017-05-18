//20. Write a JavaScript function that generates a string id (specified length) of random characters.

const getRandomLetter = function () {
    const characterList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let randomNumber = Math.floor(Math.random()*(characterList.length-1+1)+1)
    return characterList.charAt(randomNumber)
}

const generateIdOfLength = function (idLength) {
    let id = ""
    for (let i = 1 ; i <= idLength ; i++) {
        id+=getRandomLetter()
    }
    return id
}

generateIdOfLength(4)
