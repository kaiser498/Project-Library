const addBtn = document.querySelector("#addBtn");
const dialog = document.querySelector("dialog");
const bookDataForm = document.querySelector("#bookData");
const tbody = document.querySelector("tbody");
const bookTitle = document.querySelector("#book_title");
const authorName = document.querySelector("#author_name");
const pageCount = document.querySelector("#page_count");
const statusBtns = document.querySelectorAll('input[name="read_status"]');
const cancelBtn = document.querySelector("#close");

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

bookDataForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (
    bookTitle.value === "" &&
    authorName.value === "" &&
    pageCount.value === ""
  ) {
    return;
  }

  const newRow = document.createElement("tr");

  const snCell = document.createElement("td");
  const titleCell = document.createElement("td");
  const authorCell = document.createElement("td");
  const pageCell = document.createElement("td");
  const statusCell = document.createElement("td");

  snCell.textContent = tbody.rows.length + 1;
  titleCell.textContent = bookTitle.value;
  authorCell.textContent = authorName.value;
  pageCell.textContent = pageCount.value;
  statusBtns.forEach((btn) => {
    if (btn.checked) {
      statusCell.textContent = btn.value;
    }
  });

  addBookToLibrary();

  newRow.appendChild(snCell);
  newRow.appendChild(titleCell);
  newRow.appendChild(authorCell);
  newRow.appendChild(pageCell);
  newRow.appendChild(statusCell);

  tbody.append(newRow);

  bookTitle.value = "";
  authorName.value = "";
  pageCount.value = "";
});

cancelBtn.addEventListener("click", () => {
  dialog.close();
});
