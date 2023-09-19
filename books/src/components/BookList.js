import React from 'react'
import BookShow from './BookShow'

const BookList = ({ books, onDelte,onEdit }) => {

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} onDelte={onDelte} onEdit={onEdit}/>;
  });

  return (
    <div className='book-list'>
      {renderedBooks}
    </div>
  )
}

export default BookList