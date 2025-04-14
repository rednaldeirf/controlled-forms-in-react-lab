import { useState } from 'react';

const BookShelf = () => {
  // State to hold list of added books
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  // State to hold input values
  const [newBook, setNewBook] = useState({
    title: '',
    author: ''
  });

  // Handles typing into the input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook(prevBook => ({
      ...prevBook,
      [name]: value
    }));
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newBook.title.trim() || !newBook.author.trim()) return;

    // Add new book to the books array
    setBooks([...books, newBook]);

    // Clear input fields
    setNewBook({ title: '', author: '' });
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>

        {/* JSX Form */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter book title"
            value={newBook.title}
            onChange={handleInputChange}
          />

          <label htmlFor="author">Author:</label>
          <input
            type="text"
            name="author"
            id="author"
            placeholder="Enter author name"
            value={newBook.author}
            onChange={handleInputChange}
          />

          <button type="submit">Add to Shelf</button>
        </form>
      </div>

      <div className="bookCardsDiv">
        <h3>Books on the Shelf</h3>

        {/* Map through books array to display each book */}
        {books.length === 0 ? (
          <p>No books yet. Add some above!</p>
        ) : (
          books.map((book, index) => (
            <div key={index} className="bookCard">
              <h4>{book.title}</h4>
              <p>by {book.author}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BookShelf;