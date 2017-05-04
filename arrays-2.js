//2. Write a JavaScript function to clone an array.

const arrayToClone = ["clone", "this", ["array"]]

const cloneMachine = function (itemToClone, nameOfNewArray) {
    var nameOfNewArray = itemToClone
    console.log(nameOfNewArray)
    return "Item cloned successfully"
}

cloneMachine(arrayToClone, "brandNewArray")
