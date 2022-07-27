const newBookBtn  = document.querySelector('#newBookBtn');

const myForm      = document.getElementById('myForm');
const bookAuthor  = document.querySelector(`input[name = 'author']`);
const bookTitle   = document.querySelector(`input[name = 'title']`);
const bookPages   = document.querySelector(`input[name = 'pages']`);
const bookReadYes = document.querySelector('input[id="readYes"');
const bookReadNo  = document.querySelector('input[id="readNo"');

const addBook     = document.querySelector('#addBook')

let myLibrary = [];

function Book(author,title,pages) {
  this.author = author;
  this.title  = title;
  this.pages  = pages;
}

const getBookFromInput = () => {
  const title  = document.getElementById('title').value
  const author = document.getElementById('author').value
  const pages  = document.getElementById('pages').value
  const isRead = document.getElementById('isRead').checked
  return new Book(title, author, pages, isRead)
}

newBookBtn.addEventListener('click', function() {
  myForm.style.display  = 'block';
  addBook.style.display = 'block';
})


addBook.addEventListener('click', (event) => {
  const newBook = getBookFromInput();
  myForm.style.display  = 'none';
  addBook.style.display = 'none';
  myLibrary.push(newBook);
  document.getElementById("myForm").reset();
})








