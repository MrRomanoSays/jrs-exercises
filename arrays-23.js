//23. Write a JavaScript function to find the difference of two arrays.

const arrayOne = [0, 200, 1, 2, 4, 7, 23, 45];
const arrayTwo = [1, 2, 6, 4, 5, 7, 22, 5, 4, 3, -23];

const findDifference = function (array1, array2) {    
    //Placeholder for values that are different 
    let differences = [];
    
    //Checking array1 values against array2
    for (let i = 0 ; i < array1.length ; i++) {
        if (!array2.includes(array1[i])) {
            differences.push(array1[i]);
        }
    }
    //Checking array2 values against array1
    for (let i = 0 ; i < array2.length ; i++) {
        if (!array1.includes(array2[i])) {
            differences.push(array2[i]);
        }
    }
    return "The differences between the given arrays are: " + differences;
};

findDifference(arrayOne, arrayTwo);
