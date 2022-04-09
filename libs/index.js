var fs = require("fs");
var books = [];

$(document).ready(function () {
    yourFunction();
});
function yourFunction(){
    //Making books (parsing .JSON)////////////////////////////
    var data = JSON.parse(fs.readFileSync('books.json'));   //
    for (var i = 0; i < data.books.length; i++){            //
        books.push(data.books[i]);}                         //                                                         
    //////////////////////////////////////////////////////////
    console.log(books.length);
    console.log(books[0].author_name);
}