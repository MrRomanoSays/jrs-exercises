//1. Write a JavaScript function to check whether an input is an array or not.

const array = [1, 2, 3, 4, 5]

const checkIfArray = function (potentialArray) {
    if (Array.isArray(potentialArray)) {
    return true + ", this item is an array"
    } else {
    return false + ", this item is not an array."
    }
}
checkIfArray(array)
