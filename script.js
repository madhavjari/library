// creating display element and appending in main container
const container = document.querySelector('.container');
const bookDisplay = document.createElement('div');
bookDisplay.classList.add('display');
container.appendChild(bookDisplay);
container.insertBefore(bookDisplay,container.children[0]);

//creating button element and appending in main container
const addButton = document.createElement('button');
addButton.textContent = 'Add books';
container.appendChild(addButton);
container.insertBefore(addButton,container.children[1]);

//creating elements for displaying books
const library = document.createElement('h2');
library.textContent = 'Library';
bookDisplay.appendChild(library);

const bookContainer = document.createElement('div');
bookContainer.classList.add('book-container');
bookDisplay.appendChild(bookContainer);

//function for taking user input and displaying in card form
function createBookCard(title,author,pages,issue){    
    const card = document.createElement('div');
    card.classList.add('card');
    bookContainer.appendChild(card);
    
    const bookTitle = document.createElement('h4');
    bookTitle.textContent = 'Title: '+ title ;
    card.appendChild(bookTitle);

    const bookAuthor = document.createElement('h4');
    bookAuthor.textContent = 'Author: ' + author;
    card.appendChild(bookAuthor);

    const bookPages = document.createElement('h4');
    bookPages.textContent = 'Pages: '+ pages;
    card.appendChild(bookPages);

    const bookIssue = document.createElement('h4');
    bookIssue.textContent = 'Issue Year: '+ issue;
    card.appendChild(bookIssue);
}

const myLibrary=[]; //for storing every book

//constructor for books
function Book(title,author,pages,issue){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.issue = issue;
}

//adding the user inputs in library array
function addBookToLibrary(title,author,pages,issue){
    const book = new Book(title,author,pages,issue);
    myLibrary.push(book);
    console.log(myLibrary);
    createBookCard(title,author,pages,issue);
}

//form opens after clicking add button
addButton.addEventListener('click',() => {
    const form = document.querySelector('form');
    form.classList.add('after-inputs');
}
)

//taking user inputs and parsing the values
form = document.querySelector('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    const formElement = event.target;
    const title = formElement.elements.title.value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const issue = document.getElementById('issue').value;
    addBookToLibrary(title,author,pages,issue);
    formElement.reset();
})

