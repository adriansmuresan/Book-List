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
  // Get parrent
  const container = document.querySelector('.container');
  // Get form
  const form = document.querySelector('#book-form');
  // Insert alert
  container.insertBefore(div, form);

  // Timeout after 3 sec
  setTimeout(function() {
    document.querySelector('.alert').remove();
  }, 3000);
}

// Delet Book
UI.prototype.deleteBook = function(target){
  if(target.className === 'delete'){
    target.parentElement.parentElement.remove();
  }
}

// Clear fileds
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// Event Listener for adding a book
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
      ui.showAllert('Please fiil in all the fields', 'error');
    } else {
      // Add  book to list
    ui.addBookToList(book);

    // Show success
    ui.showAllert('Book Added!', 'success')

    // Clear fields
    ui.clearFields();
    }

  e.preventDefault();
} );

// Event Listener for Delete book
document.getElementById('book-list').addEventListener('click', 
  function(e) {
    
    // Instantiate UI object
    const ui = new UI();

    ui.deleteBook(e.target);

    // Show alert
    ui.showAllert('Book removed', 'success');

    e.preventDefault();
  });

