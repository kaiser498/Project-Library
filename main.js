const myLibrary = [];

function Book(title, author, page) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.page = page;
}

const addBtn = document.querySelector("#addBtn");
const dialogForEntry = document.querySelector("#dialog-for-entry");

addBtn.addEventListener("click", () => {
  dialogForEntry.showModal();
});
