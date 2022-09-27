import bookCls from './modules/bookClass.js';
import { pageNavig } from './modules/bookNav.js';
import { DateTime } from './modules/luxon.js';

const titleNew = document.querySelector('#title');
const authorNew = document.querySelector('#author');
const form = document.querySelector('#book-form');
const collection = document.querySelector('#collection');
let book = [];
let bookList = JSON.parse(localStorage.getItem('bookList')) || [];

// display book list with arrow function
const populate = (book) => {
  const row = document.createElement('tr');
  const bookTitle = document.createElement('td');
  const bookAuthor = document.createElement('td');
  const removeBtn = document.createElement('button');
  bookTitle.innerText = `"${book.title}" by ${book.author}`;
  removeBtn.innerText = 'delete';
  row.append(bookTitle, bookAuthor, removeBtn);
  collection.append(row);
  removeBtn.addEventListener('click', () => {
    removeBtn.parentElement.remove();
    const objBookClassRemove = new bookCls(book.id, book.title, book.author);
    objBookClassRemove.removeBook();
  });
}
bookList.forEach(populate);

//submit book data
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (titleNew.value !== '' && authorNew.value !== '') {
    const bookId = Math.floor(Math.random() * 100000);
    const objBookClass = new bookCls(bookId, titleNew.value, authorNew.value);
    objBookClass.addBook();
    book = { id: bookId, title: titleNew.value, author: authorNew.value };
    console.log(book);
    populate(book);
    form.reset();
  } else {
    alert('Please enter a title and author');
  }
});

// navigation of sections.
window.onload = pageNavig();

// show date and Time
const dateTime = document.getElementById('datetimesection');
const displayDateAndTime = () => {
  const dated = DateTime.now();
  dateTime.textContent = dated
    .setLocale('en-US')
    .toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
};
setInterval(displayDateAndTime, 1000);
