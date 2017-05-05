// 2. Write a JavaScript program to get the current date.

const getDateAndTime = function () {
    let fullDate = new Date()
    
    let formattedMonth = month => month < 10 ? "0" + month : month
    let month = formattedMonth(fullDate.getMonth()+1)
    
    let formattedDate = date => date < 10 ? "0" + date : date
    let date = formattedDate(fullDate.getDate())
    
    let year = fullDate.getFullYear()
    
    return month + "/" + date + "/" + year
} 

getDateAndTime()
