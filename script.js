const addButton = document.createElement('button');
addButton.textContent = 'Add books';
const body = document.querySelector('body');
body.appendChild(addButton);
body.insertBefore(addButton,body.children[0])
addButton.addEventListener('click',() => {
    const form = document.querySelector('form');
    form.classList.add('after-inputs');
}
)

const myLibrary=[];

form = document.querySelector('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    const formElement = event.target;
    const formData = new FormData(formElement);
    const dataObject = Object.fromEntries(formData);
    console.log(dataObject);
})