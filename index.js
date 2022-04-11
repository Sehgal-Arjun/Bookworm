var fs = require("fs");
var books = [];
/*
$(document).ready(function () {
    main();
});
function main(){
    //Making books (parsing .JSON)////////////////////////////
    var data = JSON.parse(fs.readFileSync('books.json'));   //
    for (var i = 0; i < data.books.length; i++){            //
        books.push(data.books[i]);}                         //                                                         
    //////////////////////////////////////////////////////////
    console.log(books.length);
    console.log(books[0].author_name);
}
*/
//Making books (parsing .JSON)////////////////////////////
var data = JSON.parse(fs.readFileSync('books.json'));
for (var i = 0; i < data.books.length; i++){
    books.push(data.books[i]);}
for (var i = 0; i < books.length; i++){
    if (books[i].author_name == "IF Magazine"){
        books.splice(i,1);
    }
    else if (books[i].author_name == "Galaxy Magazine"){
        books.splice(i,1);
    }
    else if (books[i].similar_books !== undefined){ 
        if (books[i].similar_books.length == 0){
            books.splice(i,1);
        }
    }
    else if (books[i].cover == undefined){
        books.splice(i,1);
    }
}
//////////////////////////////////////////////////////////

console.log(books.length);