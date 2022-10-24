import React from "react";
import BookForm from "./BookForm";
import { useParams } from "react-router-dom";
import  { useContext } from 'react'; //importo el hook de react
import BooksContext from '../context/BooksContext'; // importo el contexto creado para propagar las props books y setbooks a todo mi arbol de componentes

const EditBook = ({ history }) => {

  const { books, setBooks } = useContext(BooksContext); // utilizo el hook para desestructurar las props books y setbooks y usarla en mi componente.
  
    const { id } = useParams(); //este hook me duevuelve un objeto ,matcheando key/value con la <Route path="edit/:id" que tiene asignada.>

  const bookToEdit = books.find((book) => book.id === id);

  const handleOnSubmit = (book) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks([book, ...filteredBooks]);
    history.push("/");
  };

  return (
    <div>
      <BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditBook;
