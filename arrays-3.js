//3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

const array = [1, 2, 3, 4, 5]

const getArrayValues = function (array, lastIndexValue) {
    let tempArray = []
    //If no lastIndexValue is given, just returns first value
    if (!lastIndexValue) {
        return tempArray.push(array[0])
    //If lastIndexValue is larger than the array's length
    } else if (lastIndexValue>array.length) {
        for (var i = 0 ; i < array.length ; i++) {
        tempArray.push(array[i])
        }
        console.log("The index value you provided was larger than the array's length total length.  The entire array was returned.  For reference, the array's length is " + array.length)
    }
    else {
        for (var i = 0 ; i < lastIndexValue ; i++) {
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
