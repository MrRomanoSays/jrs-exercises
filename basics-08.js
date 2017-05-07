//  8. Write a JavaScript program to calculate days left until next Christmas.

const today = new Date()
var christmas = new Date()
christmas.setFullYear(2018, 11, 25)

//Date Diff function from stack overflow
var _MS_PER_DAY = 1000 * 60 * 60 * 24;

// a and b are javascript Date objects
function dateDiffInDays(a, b) {
  // Discard the time and time-zone information.
  var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  console.log(Math.floor((utc2 - utc1) / _MS_PER_DAY))
  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

dateDiffInDays(today, christmas)
