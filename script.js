const newBookBtn    = document.querySelector('#newBookBtn');
const myForm        = document.getElementById('myForm');
const addBook       = document.querySelector('#addBook')
const booksGrid     = document.querySelector('.books');
const book          = document.querySelector('#book');
const formAndButton = document.querySelector('.formAndButton')


let myLibrary = [];

function Book(author,title,pages,isRead) {
  this.author = author;
  this.title  = title;
  this.pages  = pages;
  this.isRead = isRead
}

const getBookFromInput = () => {
  const title  = document.getElementById('title').value
  const author = document.getElementById('author').value
  const pages  = document.getElementById('pages').value
  const isRead = document.getElementById('isRead').checked
  return new Book(title, author, pages, isRead)
}

newBookBtn.addEventListener('click', function() {
  formAndButton.style.display = 'flex';
})


addBook.addEventListener('click', (event) => {
  const newBook = getBookFromInput();
  formAndButton.style.display = 'none'
  myLibrary.push(newBook);
  document.getElementById("myForm").reset();
  displayCards();
})

function displayCards() {
  let bookCard = createCard();
  let bookIndex = myLibrary.length-1;
  bookCard.setAttribute('book-index',bookIndex);
  let bookObject = myLibrary[bookIndex];
  bookCard.innerHTML += '<p>' + 'TITLE: '  + bookObject.title  + '</p>';
  bookCard.innerHTML += '<p>' + 'AUTHOR: ' + bookObject.author + '</p>';
  bookCard.innerHTML += '<p>' + 'PAGES: '  + bookObject.pages  + '</p>';
  bookCard.innerHTML += '<p>' + 'READ: '   + bookObject.isRead + '</p>';
  bookCard.innerHTML += `<button class = "delete" book-index = ${bookIndex}>` + 'DELETE' + '</button>'
  
}

function createCard() {
  const card = document.createElement('div');
  card.classList.add('card');
  booksGrid.appendChild(card); 
  return card
}












