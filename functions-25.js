//25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.

const countries = ["Australia", "Germany", "United States of America"]

const longestCountryName = function (array) {
  let count = 0
  let longestName
  array.map(country => country.length > count ? (count=country.length, longestName=country) : null)
  console.log(longestName)
  return "The longest country name is " + longestName + " with a length of " + count + " letters."
}

longestCountryName(countries)
