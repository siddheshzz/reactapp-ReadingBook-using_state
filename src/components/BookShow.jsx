import React, { useState } from 'react'
import BookEdit from './BookEdit'

const BookShow = ({book, onDelete, onEdit}) => {
    const [showEdit, setShowEdit] = useState(false)


    const handleDeleteClick = ()=>{
        onDelete(book.id);
    }
    const handleEditClick = ()=>{
        setShowEdit(!showEdit);

    }
    const handleSubmit = (id,newtitle) =>{
        setShowEdit(false);
        onEdit(id,newtitle)

    }
    let content = <h3>{book.title}</h3>
    if(showEdit){
        content = <BookEdit onSubmit={handleSubmit} book={book}/>
    }


  return (
    <div className='book-show'>
        <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="" />
        <div>{content}</div>
      <div className='actions'>
        <button className='edit' onClick={handleEditClick}>Edit</button>
        <button className='delete' onClick = {handleDeleteClick}>Delete</button>
      </div>
    </div>
  )
}

export default BookShow