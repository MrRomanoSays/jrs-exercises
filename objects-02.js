// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

const student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 }

var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 }

////////////////////////////////////
//Version 1:  (Hard Coded Property)
////////////////////////////////////

const deleteRollno = function (object) {
    console.log(object)
    delete object.rollno
    let newObject = object
    return newObject    
}

//deleteRollno(student)

////////////////////////////////////////
//Version 2:  Dynamic Property & Object 
///////////////////////////////////////

const deletePropertyFromObject = function (property, object) {
    console.log(object)
    delete object[property]
    let newObject = object
    return newObject
}

deletePropertyFromObject('rollno', student)

////////////////////
//Version 3: Curried
////////////////////

const testObject = {name: "Jimmy", phone: "233-234-1136", rollno: true}

const deletePropFromObject = function (property) {
  return function(object) {
    delete object[property]
    console.log(object)
    return object
  }
}

const deleteRollNo = deletePropFromObject('rollno')

deleteRollNo(testObject)
