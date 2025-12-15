const addBtn = document.querySelector("#addBtn");
const dialog = document.querySelector("dialog");
const bookDataForm = document.querySelector("#bookData");
const tbody = document.querySelector("tbody");
const bookTitle = document.querySelector("#book_title");
const authorName = document.querySelector("#author_name");
const pageCount = document.querySelector("#page_count");
const statusBtns = document.querySelectorAll('input[name="read_status"]');

const myLibrary = [];

function Book(title, author, page) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.page = page;
}

addBtn.addEventListener("click", () => {
  dialog.showModal();
});

function addBookToLibrary() {
  const book = new Book(bookTitle.value, authorName.value, pageCount.value);
  myLibrary.push(book);
}
