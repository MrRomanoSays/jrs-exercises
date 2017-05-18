//Practice Related to a Curried Function

//Non Curried Example requires two arguments
const requireTypeNotCurried = function (data, type) {
  if (typeof data !== type) {
    console.log("This function requires that the input's type be equal to " + type +".")
  } else {
    console.log("Data type verified.  Function proceeding...")
  }
}

//Non curried approach is more susceptible to user input error
requireTypeNotCurried(34, "number") // ==> Success
requireTypeNotCurried("Joe", "number") // ==> Failure


///////////////////
//Curried Example
///////////////

const requireType = function (type) {
  return function (data) {
    if (typeof data !== type) {
      console.log("This function requires that the input's type be a " + type +".")
    } else {
      console.log("Input type verified.")
    } 
  }
}

//Variations of required type depending on need:
//const checkTypeIsNumber = requireType("number")
//const checkTypeIsString = requireType("string")
//const checkTypeIsBoolean = requireType("boolean")
//const checkTypeIsObject = requireType("object")


//Another Curried Example with default value and trim
const greetCurried = function(message) {
  return function(name="") {
    console.log((message + " " + name).trimRight())
  }
}

const greetHello = greetCurried("Hello")
greetHello("Jimmy")

/*
This version provides an empty string as the default value.  
This stops undefined from displaying and allows greetHello to be usable on its own (without a given name).  
In that case the empty string should be removed and it is with trim.
*/

greetHello()
