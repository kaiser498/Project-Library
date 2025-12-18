const myLibrary = [
  {
    id: "55d2235f-2678-462e-8091-10c1af3e80a5",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    page: "200",
    status: "Not Read",
  },
  {
    id: "55d2235f-2678-462e-8091-10c1af3e80a5",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J. K. Rowling",
    page: "327",
    status: "Not Read",
  },
];

const tbody = document.querySelector("tbody");

updateTable();

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

function updateTable() {
  tbody.innerHTML = "";

  const fragment = document.createDocumentFragment();

  for (const book of myLibrary) {
    const newRow = document.createElement("tr");

    const snCell = document.createElement("td");
    const newTitleCell = document.createElement("td");
    const newAuthorCell = document.createElement("td");
    const newPageCell = document.createElement("td");
    const statusCell = document.createElement("td");
    const deleteOptionCell = document.createElement("td");
    const deleteRowBtn = document.createElement("input");
    const labelForDel = document.createElement("label");

    deleteRowBtn.type = "checkbox";
    deleteRowBtn.className += "delete_row";
    deleteRowBtn.name = "delete_row";
    deleteRowBtn.value = "delete";

    labelForDel.htmlFor = "delete_row";
    labelForDel.appendChild(document.createTextNode("Delete"));
    deleteOptionCell.append(labelForDel, deleteRowBtn);

    snCell.textContent = `${tbody.rows.length + 1}.`;
    newTitleCell.textContent = book.title;
    newAuthorCell.textContent = book.author;
    newPageCell.textContent = book.page;
    statusCell.textContent = book.status;

    newRow.append(
      snCell,
      newTitleCell,
      newAuthorCell,
      newPageCell,
      statusCell,
      deleteOptionCell
    );

    fragment.append(newRow);
  }
  tbody.append(fragment);
}

const submitBtn = document.querySelector("#submitForAddition");
submitBtn.addEventListener("click", () => {
  addNewBookToLibrary();
  updateTable();
});
