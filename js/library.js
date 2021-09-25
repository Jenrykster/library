let myLibrary = [];

function Book(title, author, pages, hasRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

function addBook(title, author, pages, hasRead){
    let newBook = new Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
}