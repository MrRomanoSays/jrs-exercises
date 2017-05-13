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
