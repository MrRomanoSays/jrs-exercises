/*
Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

Sample array : [1,2,3,4,5]
Expected Output : 2,4

*/

const array = [1, 4, 5, 7, 10, 8, 22, 5, 6, 7, 12, 40, 245, 2]

const secondBiggestAndSmallestNumbers = function (array) {
  let sortedArray = array.sort(function(a, b){return a-b})
  let message = `Sorted Array: ${sortedArray} 
Second Smallest Number: ${sortedArray[1]}
Second Greatest Number: ${sortedArray[sortedArray.length-2]}`
  
  console.log(message)
  return(message)
}

secondBiggestAndSmallestNumbers(array)
