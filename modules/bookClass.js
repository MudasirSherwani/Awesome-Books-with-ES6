let book = [];
let bookList = JSON.parse(localStorage.getItem('bookList')) || [];
export default class BookClass {
  constructor(id, title, author) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  addBook() {
    book = { id: this.id, title: this.title, author: this.author };
    bookList.push(book);
    localStorage.setItem('bookList', JSON.stringify(bookList));
  }

  removeBook() {
    bookList = bookList.filter((books) => books.id !== this.id);
    localStorage.setItem('bookList', JSON.stringify(bookList));
  }
}
