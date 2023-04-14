import { useState } from 'react';
import './App.css';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books,setBooks] = useState([]);

  const handleCreateBook = (title) =>{
    console.log(books)
    const updateBooks = [...books, {id:Math.floor((Math.random()*100)+1),title:title}]
    setBooks(updateBooks)
  }

  const deleteBookById = (id) =>{
    const updatedBooks = books.filter((book) =>{
      return book.id !== id
    })
    setBooks(updatedBooks)
  }

  const editBookById = (id,title) =>{
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: title };
      }
  
      return book;
    });
  
    setBooks(updatedBooks); 
  }


  return (
     <div className="app">
      <h1>Reading List</h1>
     <BookList books = {books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onSubmit={handleCreateBook} />
      
     </div>
  );
}

export default App;
