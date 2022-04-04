class Book{
    name = "";

    constructor(title, authors, categories, thumbnail, description, publishedYear, averageRating, pages, numRatings) {
        this.title = title
        this.authors = author
        this.categories = categories
        this.thumbnail = thumbnail
        this.description = description
        this.publishedYear = publishedYear
        this.averageRating = averageRating
        this.pages = pages
        this.numRatings = numRatings
    }

    getName  = () => {
        return this.name;
    };

}