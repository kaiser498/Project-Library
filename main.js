const myLibrary = [];

function Book(title, author, page, status) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.page = page;
  this.status = status;
}

const addBtn = document.querySelector("#addBtn");
const dialogForEntry = document.querySelector("#dialog-for-entry");

addBtn.addEventListener("click", () => {
  dialogForEntry.showModal();
});

const bookTitle = document.querySelector("#book_title");
const authorName = document.querySelector("#author_name");
const pageCount = document.querySelector("#page_count");
const statusBtns = document.querySelector('input[name="read_status"]:checked');

function addNewBookToLibrary() {
  let book = new Book(
    bookTitle.value,
    authorName.value,
    pageCount.value,
    statusBtns.value
  );
  myLibrary.push(book);
}

const tbody = document.querySelector("tbody");
