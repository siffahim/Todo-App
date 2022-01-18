import React, { ChangeEvent, useState } from 'react';
import './App.scss';
import BookList from './Pages/BookList/BookList';
import { Book } from './Pages/interfaces';



function App(): JSX.Element {
  const [book, setBook] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [bookLists, setBookLists] = useState<Book[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === 'book') {
      setBook(value)
    }
    else {
      setAuthor(value)
    }
  }

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault()
    const newBook = { id: bookLists.length, bookName: book, authorName: author };
    setBookLists([...bookLists, newBook])

  }

  const handleDelete = (id: number) => {
    const remaining = bookLists.filter(book => book.id !== id);
    setBookLists(remaining)
  }

  return (
    <div className='app'>
      <div className='form-container'>
        <h1 className='title'>To-Do List</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name='book' onChange={handleChange} placeholder='Book Name' />
          <input type="text" name='author' onChange={handleChange} placeholder='Author Name' />
          <button type='submit' className='btn'>Book List</button>
        </form>
      </div>
      <div className='list-container'>
        {
          bookLists.length > 0 && <>
            <h2 className='table-cap'>ITEMS LIST</h2>
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Book Name</th>
                  <th>Author Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  bookLists.map((book: Book) => <BookList
                    key={book.id}
                    book={book}
                    handleDelete={handleDelete}
                  />)
                }
              </tbody>
            </table>
          </>

        }
      </div>
    </div>
  );
}

export default App;
