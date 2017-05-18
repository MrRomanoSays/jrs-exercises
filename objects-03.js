// 3. Write a JavaScript program to get the length of an JavaScript object.

const testObject = {firstName: "Jackson", lastName: "Sawyer", degree: false, age: 17}

const numberOfKeys = function (object) {
    return Object.keys(object).length
}

numberOfKeys(testObject)
