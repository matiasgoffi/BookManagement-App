import React from "react";
import BookForm from "./BookForm";
import  { useContext } from 'react'; //importo el hook de react
import BooksContext from '../context/BooksContext'; // importo el contexto creado para propagar las props books y setbooks a todo mi arbol de componentes

const AddBook = ({ history }) => {

  const { books, setBooks } = useContext(BooksContext); // utilizo el hook para desestructurar las props books y setbooks y usarla en mi componente.

  const handleOnSubmit = (book) => {
    setBooks([book, ...books]);
    history.push("/");
  };

  return (
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddBook;
