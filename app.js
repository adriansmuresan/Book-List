// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {

}

UI.prototype.addBookToList = function(book) {
  console.log(book);
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit', 
  function(e) {
    // Getting form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

    // Instantiate new Book 
    const book = new Book(title, author, isbn);

    // Instantiate UI object
    const ui = new UI();

    // Add  book to list
    ui.addBookToList(book);
 
  e.preventDefault();
} );
