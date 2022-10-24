import React from 'react';
import _ from 'lodash';
import Book from './Book';
import  { useContext } from 'react'; //importo el hook de react
import BooksContext from '../context/BooksContext'; // importo el contexto creado para propagar las props books y setbooks a todo mi arbol de componentes

const BooksList = () => {

  const { books, setBooks } = useContext(BooksContext); // utilizo el hook para desestructurar las props books y setbooks y usarla en mi componente.

  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <React.Fragment>
      <div className="book-list">
        {!_.isEmpty(books) ? (
          books.map((book) => (
            <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p className="message">No books available. Please add some books.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default BooksList;