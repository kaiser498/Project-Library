const addBtn = document.querySelector("#addBtn");
const dialog = document.querySelector("#dialog-for-entry");
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

const book = new Book(bookTitle.value, authorName.value, pageCount.value);

function addBookToLibrary() {
  myLibrary.push(book);
}

bookDataForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (
    bookTitle.value === "" ||
    authorName.value === "" ||
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
  const delCell = document.createElement("td");

  let serialNum = tbody.rows.length + 1;
  snCell.textContent = `${serialNum} .`;
  titleCell.textContent = bookTitle.value;
  authorCell.textContent = authorName.value;
  pageCell.textContent = pageCount.value;
  statusBtns.forEach((btn) => {
    if (btn.checked) {
      statusCell.textContent = btn.value;
    }
  });

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  checkbox.setAttribute("name", "delete_book_data");
  checkbox.setAttribute("unique-id", book.id);

  delCell.appendChild(checkbox);

  addBookToLibrary();

  newRow.appendChild(snCell);
  newRow.appendChild(titleCell);
  newRow.appendChild(authorCell);
  newRow.appendChild(pageCell);
  newRow.appendChild(statusCell);
  newRow.appendChild(delCell);

  tbody.append(newRow);

  bookTitle.value = "";
  authorName.value = "";
  pageCount.value = "";
});

cancelBtn.addEventListener("click", () => {
  dialog.close();
});
