// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

const library = [
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games',
       readingStatus: false
   }]

const displayAllBooksInLibrary = function (array) {
    let allBooks = ""
    array.map(bookObject => allBooks+=`Author: ${bookObject.author}, Title: ${bookObject.title}, Reading Status: ${bookObject.readingStatus}
`)
    return allBooks
}

displayAllBooksInLibrary(library)

/*
//Display Only Books Currently Being Read:
const displayBooksBeingRead = function (array) {
    let list = ""
    array.map(bookObject => bookObject.readingStatus === true ? list+=`Author: ${bookObject.author}, Title: ${bookObject.title}
` : null)
    return list
}

displayBooksBeingRead(library)
*/
