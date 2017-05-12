//

/*
const typeChecker = function (unknown) {
    return typeof unknown
}
*/

//As Arrow Function
const typeChecker = unknown => typeof unknown

//Testing
//typeChecker(true) // ==> "boolean"
//typeChecker("hello")  // ==> "string"
//typeChecker(32) // ==> "number"
//typeChecker({name: "jack"})  // ==> "object"
//typeChecker([22]) // ==> "object"
//typeChecker() // ==> "undefined"
