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
  const list = document.getElementById('book-list');

  // Create tr element
  const row = document.createElement('tr');

  // Insert columns
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</td>
  `;

  list.appendChild(row);
}

// Show Alert
UI.prototype.showAllert = function(message, className) {
  // Create div
  const div = document.createElement('div');
  // Add classes 
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
}

// Clear fileds
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
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

    // Validation
    if(title === ''|| author === '' || isbn === '') {
      // Error alert
      UI.showAllert('Please fiil in all the fields', 'error');
      );
    } else {
      // Add  book to list
    ui.addBookToList(book);

    // Clear fields
    ui.clearFields();
    }

  e.preventDefault();
} );
