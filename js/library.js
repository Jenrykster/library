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


let bookGrid = document.querySelector('#book-grid');
let bookCard = document.createElement('div');
let cardTemplate = '<div class="book-card"> <h3>Book Title</h3> <h4>Author</h4> <div> <p>777 pages</p> <label for="read">Read</label> <input name="read" type="checkbox" checked> </div> </div>';
bookCard.innerHTML = cardTemplate.trim();


for(let i=0; i<10;i++){
    bookGrid.appendChild(bookCard.cloneNode(true));
}