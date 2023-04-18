import React, { useState } from 'react'
import useBooksContext from '../hooks/use-books-context'


const BookCreate = () => {
  
  const [title,setTitle] = useState('')
  const {handleCreateBook} = useBooksContext();


  const handleFormSubmit = (e) => {
    e.preventDefault();

    handleCreateBook(title)

    setTitle('')

  }


  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleFormSubmit}>
      <label>Title</label>
        <input className = "input"
              type="text"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value.toUpperCase())
              }
            />
            <button className = "button">Create!</button>




      </form>
      
    </div>
  )
}

export default BookCreate
