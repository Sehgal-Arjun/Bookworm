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

window.onload = function(){
    document.getElementById('RecText').innerHTML = '<img src="http://books.google.com/books/content?id=KQZCPgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"/>';
}

var bigString = ``