//10. Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.

const temperatureConverter = function (temp) {
let celcToFahr = confirm("Would you like to convert degrees Celcius to degrees Fahrenheit?")
const degreeSymbol = "\xB0"
const messageOutput = function (c, f) {
  return `Expected Output:

      ${c}${degreeSymbol}C is ${f}${degreeSymbol}F

      ${f}${degreeSymbol}F is ${c}${degreeSymbol}C`
}

  if (celcToFahr) {
      //Converting degrees Celcius to degrees Fahrenheit
      let c = temp
      let f = ((c/5)*9)+32
      console.log(`Converting deg C to deg F. C: ${c} and F: ${f}`)
      return messageOutput(c, f)
      
  } else {
      //Converting degrees Fahrenheit to degrees Celcius
      let f = temp
      let c = ((f-32)/9)*5
      console.log(`Converting deg F to deg C. C: ${c} and F: ${f}`)
      return messageOutput(c, f)
  }
}

temperatureConverter(60)
