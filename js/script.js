// Get UI elements
let form = document.querySelector("#book-form");
// Book Class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
// UI class
class UI {
    constructor() {

    }
    addToBookList(book) {
        let list = document.querySelector("#book-list");
        let row = document.createElement('tr');
        row.innerHTML = `<td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class="delete">X</a></td>`
        list.appendChild(row);

    }
    clearFields() {
        document.querySelector("#title").value = '';
        document.querySelector("#author").value = '';
        document.querySelector("#isbn").value = '';
    }
    showAlert(message, className) {
        let div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector('.container');
        let form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 1000)
    }
}
// Add event listener
form.addEventListener('submit', newBook);

// Define functions
function newBook(e) {
    let ui = new UI();
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let isbn = document.querySelector("#isbn").value;
    if (title === '' || author === '' || isbn === '') {
        ui.showAlert("Please fil all the fields", "error");
    } else {
        let book = new Book(title, author, isbn);
        ui.clearFields();
        ui.addToBookList(book);
        ui.showAlert("Book added", "success");
    }
    e.preventDefault();

}