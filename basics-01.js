//  1. Write a JavaScript program to display the current day and time in the following format.

/*
Original Format:
Sample Output : Today is : Friday.

Current time is : 4 PM : 50 : 22

Preferred Format:
Today is Friday
Current time: PM 12:25:42
*/


const getCurrentDateAndTime = function () {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const d = new Date()

  //Show full Day
  let day = daysOfWeek[d.getDay()]
  
  let formatHour = function (hour) {
    if(hour<12) {
        return "AM " + hour
    } else {
        return "PM " + hour
    }
  }

  let hour = formatHour(d.getHours())
  let minutes = d.getMinutes()
  let seconds = d.getSeconds()

return "Today is " + day + "." +"\n\nCurrent time: " + hour + ":" + minutes + ":" + seconds
}

getCurrentDateAndTime()
