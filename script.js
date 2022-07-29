const newBookBtn    = document.querySelector('#newBookBtn');
const addBook       = document.querySelector('#addBook')
const booksGrid     = document.querySelector('.books');
const formAndButton = document.querySelector('.formAndButton')

let myLibrary = [];

function Book(title,author,pages,isRead) {
  this.title  = title;
  this.author = author;
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
  booksGrid.style.display     = 'none';
})

addBook.addEventListener('click', (event) => {
  const newBook = getBookFromInput();
  document.getElementById("myForm").reset();

  formAndButton.style.display = 'none'
  booksGrid.style.display     = "flex"

  myLibrary.push(newBook);
  displayCards();
})

function displayCards() {
  let bookCard = createCard();
  let bookIndex = myLibrary.length-1;
  let bookObject = myLibrary[bookIndex];

  bookCard.setAttribute('book-index',bookIndex);
  bookCard.innerHTML += '<p>' + 'TITLE: '  + bookObject.title  + '</p>';
  bookCard.innerHTML += '<p>' + 'AUTHOR: ' + bookObject.author + '</p>';
  bookCard.innerHTML += '<p>' + 'PAGES: '  + bookObject.pages  + '</p>';
  bookCard.innerHTML += '<p>' + 'READ STATUS: '   + '</p>';
  bookCard.innerHTML += `<button class = "delete" book-index = ${bookIndex}>` + 'REMOVE' + '</button>'
  deleteButton();
  
  
  // READ STATUS SWITCH
  if (!bookObject.isRead) {
    const switchButton = createSwitch(true);
    bookCard.appendChild(switchButton);
  } else {
    const switchButton = createSwitch(false);
    bookCard.appendChild(switchButton);
  }


  const input = document.querySelectorAll('input[class="checkbox"]');
  input.forEach(input => input.addEventListener('change',(event) => {
    if (event.target.checked) {
      // if it has not read yet
      bookObject.isRead = false;
    } else {
      bookObject.isRead = true;
    }
  }))

}


function createCard() {
  const card = document.createElement('div');
  card.classList.add('card');
  booksGrid.appendChild(card); 
  return card
}

function deleteButton() {
  const deleteBTN = document.querySelectorAll('.delete');
  deleteBTN.forEach(button => button.addEventListener('click',(event) => {
    let targetCardIndex = event.target.attributes['book-index'].value;
    const removeThisChild = document.querySelector(`[book-index="${targetCardIndex}"]`);
    booksGrid.removeChild(removeThisChild);  
  }));
}

function createSwitch(checked){
  // Create the needed elements
  const toggleBtnCover = document.createElement('div');
  const btnCover       = document.createElement('div');
  const btnDiv         = document.createElement('div');
  const btnInput       = document.createElement('input');
  const knobs          = document.createElement('div');
  const layer          = document.createElement('layer');

  // Give the needed attributes
  toggleBtnCover.classList.add('toggle-button-cover');
  btnCover.classList.add('button-cover');
  btnDiv.classList.add('button')     ; btnDiv.id = 'button-1';
  btnInput.classList.add('checkbox') ; btnInput.type = 'checkbox';
  knobs.classList.add('knobs');
  layer.classList.add('layer');
  // Place them
  toggleBtnCover.appendChild(btnCover);
  btnCover.appendChild(btnDiv);
  btnDiv.appendChild(btnInput);
  btnDiv.appendChild(knobs);
  btnDiv.appendChild(layer);

  if (checked == true) {
    btnInput.checked = true;
  }
  return toggleBtnCover;
}












