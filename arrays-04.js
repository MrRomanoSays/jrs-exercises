// 4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

const array = [1, 2, 3, 4, 5]

const getArrayValues = function (array, lastIndexValue) {
    let tempArray = []
    let lastArrayValue = array.length - 1;
    if (!lastIndexValue) {
        tempArray.push(array[lastArrayValue])
    } else if (lastIndexValue>array.length) {
        for (var i = lastArrayValue ; i >= 0 ; i--) {
        tempArray.push(array[i])
        }
        console.log("The index value you provided was larger than the array's total length.  The entire array was therefore returned.  For reference, the array's length is " + array.length)
    }
    else {
        for (var i = lastArrayValue ; i > lastArrayValue-lastIndexValue ; i--) {
        tempArray.push(array[i])
        }
    }
    return tempArray
}

//Testing Scenarios
//getArrayValues(array)
//getArrayValues(array, 0)
//getArrayValues(array, 3)
//getArrayValues(array, 20)
