import React, { useState } from 'react';
import BookEdit from './BookEdit';

const BookShow = ({ book, onDelte, onEdit }) => {

  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelte(book.id);
  }

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  }

  const handleSubmit = (id, newTitle) => {
    onEdit(id, newTitle);
    setShowEdit(false);
  }

  return (
    <div className='book-show'>

      <img
        alt='books'
        src={`https://picsum.photos/seed/${book.idF}300/200`}
      />
      <div>
        {(showEdit) ? (<BookEdit book={book} onSubmit={handleSubmit} />) : (<h3> {book.title} </h3>)}
      </div>
      <div className='actions'>
        <button className='edit' onClick={handleEditClick}>
          Edit
        </button>
        <button className='delete' onClick={handleDeleteClick} >
          Delete
        </button>
      </div>
    </div>
  )
}

export default BookShow