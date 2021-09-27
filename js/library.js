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

let addButton = document.querySelector('#add-button');
let form = document.querySelector('#register');

addButton.onclick = function(){
    let bookData = Object.fromEntries(new FormData(form).entries());
    addBook(bookData.title, bookData.author, bookData.pages, bookData.read == 'on');
    updateLib();
}



let bookGrid = document.querySelector('#book-grid');

function updateLib(){
    let cards = document.querySelectorAll('.book-card[data-index]');
    let indexes = [];
    cards.forEach((bookCard => {
        indexes.push(Number(bookCard.dataset.index));
    }))
    for(let book of myLibrary){
        if(indexes.includes(myLibrary.indexOf(book))){  //Check if the same entry was already added 
            return;
        }
        else{
            let newBookCard = document.createElement('div');
            let cardHTMLInfo = `<div class="book-card" data-index=${myLibrary.indexOf(book)}> <h3>${book.title}</h3> <h4>${book.author}</h4> <div> <p>${book.pages} pages</p> <label for="read">Read</label> <input name="read" class="hasread" type="checkbox"> </div> </div>`;
            newBookCard.innerHTML = cardHTMLInfo.trim();
            if(book.hasRead){
                newBookCard.querySelector('input[type=checkbox]').checked = true;
            }
            bookGrid.appendChild(newBookCard);
        }
    }
}

window.onload = updateLib;
