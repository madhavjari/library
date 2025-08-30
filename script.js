const bookDisplay = document.querySelector('.display');
const bookContainer = document.createElement('div');
bookContainer.classList.add('book-container');
bookDisplay.appendChild(bookContainer);

//function for taking user input and displaying in card form
function createBookCard(id,title,author,pages,issue,status){    
    const card = document.createElement('div');
    card.classList.add('card');
    card.id = 'a'+id;
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

    const statusButton = document.createElement('button');
    card.appendChild(statusButton);

    const bookStatus = document.createElement('h4');
    bookStatus.textContent = status;
    statusButton.appendChild(bookStatus);

    const removeButton = document.createElement('button');
    removeButton.id = id;
    card.appendChild(removeButton);

    const bookRemove = document.createElement('h4');
    bookRemove.textContent = 'Remove';
    removeButton.appendChild(bookRemove);
    
    removeButton.addEventListener('click',() => {
        const card = document.querySelector('#a'+id+'.card');
        console.log(card);
        if(card)card.remove();
        const bookToRemove = id;
        console.log(bookToRemove);
        const index = myLibrary.findIndex(book => book.id === bookToRemove);
        if(index !== -1)myLibrary.splice(index,1);
    })
}


const myLibrary=[]; //for storing every book

//constructor for books
function Book(id,title,author,pages,issue,status){
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.issue = issue;
    this.status = status;
}

//adding the user inputs in library array
function addBookToLibrary(id,title,author,pages,issue,status){
    const book = new Book(id,title,author,pages,issue,status);
    myLibrary.push(book);
    console.log(myLibrary);
    createBookCard(id,title,author,pages,issue,status);
}
const bookForm = document.getElementById('book-form');
//form opens after clicking add button
document.getElementById('add-book').addEventListener('click',() => {
    bookForm.showModal();
}
)
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const issueInput = document.getElementById('issue');
const statusInput = document.getElementById('status');

bookForm.addEventListener('close',() =>{
    titleInput.setAttribute('required', 'true');
    authorInput.setAttribute('required', 'true');
    pagesInput.setAttribute('required', 'true');
})

document.getElementById('close-button').addEventListener('click',() =>{
    titleInput.removeAttribute('required');
    authorInput.removeAttribute('required'); 
    pagesInput.removeAttribute('required');
    bookForm.close();
} )

//taking user inputs and parsing the values
form = document.querySelector('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    const formElement = event.target;
    const id = crypto.randomUUID();
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const issue = issueInput.value;
    let status = statusInput.checked;
    if (status) status = 'Read';
    else status = 'Unread';
    addBookToLibrary(id,title,author,pages,issue,status);
    formElement.reset();
})

