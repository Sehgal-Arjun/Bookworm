const csv = require('csv-parser')
const fs = require('fs');
const { parse } = require('path');
const results = [];
let books = [];

class Book{

    constructor(t, a, c, th, d, py, ar, p, nr) {
        this.title = t;
        this.authors = a;
        this.categories = c;
        this.thumbnail = th;
        this.description = d;
        this.publishedYear = py;
        this.averageRating = ar;
        this.pages = p;
        this.numRatings = nr;
    }

    getName(){
        return this.title;
    }
    getAuthors(){
        return this.authors;
    }
    getCategories(){
        return this.categories;
    }
    getThumbnail(){
        return this.thumbnail;
    }
    getDescription(){
        return this.description;
    }
    getYear(){
        return this.publishedYear;
    }
    getRating(){
        return this.averageRating;
    }
    getPages(){
        return this.pages;
    }
    getNumRatings(){
        return this.numRatings;
    }

}

fs.createReadStream('books.csv')
    .pipe(csv({}))
    .on('data', (data) => results.push(data))
    .on('end', () => {
        for (let i = 0; i < results.length; i++){
            let obj = results[i];
            let book = new Book(obj.title, obj.authors, obj.categories, obj.thumbnail, obj.description, obj.publishedYear, obj.averageRating, obj.pages, obj.numRatings);
            books.push(book);
        }

        let name = books[0].title
        console.log(books[0].title)







    });
    