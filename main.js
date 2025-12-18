const addBtn = document.querySelector("#addBtn");
const dialog = document.querySelector("#dialog-for-entry");
const bookDataForm = document.querySelector("#bookData");
const tbody = document.querySelector("tbody");
const bookTitle = document.querySelector("#book_title");
const authorName = document.querySelector("#author_name");
const pageCount = document.querySelector("#page_count");
const statusBtns = document.querySelectorAll('input[name="read_status"]');
const cancelBtn = document.querySelector("#close");
const deleteBtn = document.querySelector("#delete-button");
const dialogDeletion = document.querySelector("#dialog-for-deletion");
const deleteCheckbox = document.querySelectorAll(
  '[name="delete_book_data"]:checked'
);
const deletionYes = document.querySelector("#deletion-yes");
const deletionNo = document.querySelector("#deletion-no");

const myLibrary = [
  {
    id: "883a2365-7e3b-4287-a767-b87a1af891ca",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    page: "200",
  },{
    id: "883a2365-7e3b-1242-a767-b87a1af891ca",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J. K. Rowling",
    page: "327",
  }
];

function Book(title, author, page) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.page = page;
}

addBtn.addEventListener("click", () => {
  dialog.showModal();
});

bookDataForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (
    bookTitle.value === "" ||
    authorName.value === "" ||
    pageCount.value === ""
  ) {
    return;
  }

  const book = new Book(bookTitle.value, authorName.value, pageCount.value);

  myLibrary.push(book);

  bookTitle.value = "";
  authorName.value = "";
  pageCount.value = "";
});

cancelBtn.addEventListener("click", () => {
  dialog.close();
});

deleteBtn.addEventListener("click", () => {
  if (deleteCheckbox.length === 0) {
    return;
  }
  dialogDeletion.showModal();
});

deletionYes.addEventListener("click", () => {
  runfunctioThatDeletes();
  dialogDeletion.close();
});

deletionNo.addEventListener("click", () => {
  dialogDeletion.close();
});
