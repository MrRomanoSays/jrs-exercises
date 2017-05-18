// 1. Write a JavaScript program to list the properties of a JavaScript object.

const student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

const readKeys = function (obj) {
    
    let arrayOfKeys = Object.keys(obj)
    console.log("Object converted to array of keys: " + arrayOfKeys)
    //Return converts array of key values to a single string
    return arrayOfKeys.toString() // ==> "name,sclass,rollno"
}

readKeys(student)
