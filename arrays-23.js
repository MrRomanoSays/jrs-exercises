//23. Write a JavaScript function to find the difference of two arrays.

const arrayOne = [1, 2, 3, 4, 5];
const arrayTwo = [1, 2, 6, 4, 5, 7, 22, 5, 4, 3];

const findDifference = function (array1, array2) {
    if (array1.length > array2.length) {
        var largerArray = array1;
        var smallerArray = array2;
    } else if (array1.length < array2.length) {
        var largerArray = array2;
        var smallerArray = array1;
    } else {
        var largerArray = array1;
        var smallerArray = array2;
    }
    
    let differences = [];
    
    for (let i = 0 ; i < largerArray.length ; i++) {
        if (!smallerArray.includes(largerArray[i])) {
            differences.push(largerArray[i]);
        }
    }
return "The differences between the given arrays are: " + differences;
};

findDifference(arrayOne, arrayTwo);
