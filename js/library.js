let myLibrary = [];
class Book{
    constructor(title, author, pages, hasRead){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.hasRead = hasRead;    
    }
    set pages(pages){
        if(pages == ''){
            alert("Please input numbers only !");
            this.pages = 0;
        }else{
            this.pages = pages;
        }
    }
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
    bookGrid.innerHTML = '';
    for(let book of myLibrary){
        let newBookCard = document.createElement('div');
        let cardHTMLInfo = `<div class="book-card" data-index=${myLibrary.indexOf(book)}> <h3>${book.title}</h3> <h4>${book.author}</h4> <div> <p>${book.pages} pages</p> <label for="read">Read</label> <input name="read" class="hasread" type="checkbox" onclick="changeStatus(this)"> </div><button onclick="removeCard(this)">remove</button> </div>`;
        newBookCard.innerHTML = cardHTMLInfo.trim();
        if(book.hasRead){
            newBookCard.querySelector('input[type=checkbox]').checked = true;
        }
        bookGrid.appendChild(newBookCard);
    }
    localStorage.setItem('myLib',JSON.stringify(myLibrary));
}
function changeStatus(e){
    let cardIndex = e.parentNode.parentNode.dataset.index;
    if(e.checked){
        myLibrary[cardIndex].hasRead = true;
    }else{
        myLibrary[cardIndex].hasRead = false;
    }
    updateLib();
}
function removeCard(e){
    let index = e.parentNode.dataset.index;
    console.log(index);
    console.log(myLibrary[index]);
    myLibrary.splice(index,1);
    updateLib();
}
window.onload = function(){
    myLibrary = JSON.parse(localStorage.getItem('myLib') || []);
    updateLib();
}
