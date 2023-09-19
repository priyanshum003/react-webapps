import React, { useState } from 'react'
import "./index.css"
const BookCreate = ({ onCreate }) => {

  const [bookTitle, setBookTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(bookTitle);
    setBookTitle('');
  }

  const handleInput = (e) => {
     setBookTitle(e.target.value);

  }


  return (
    <div className='book-create'>
      <h3> Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label> Title </label>
        <input type='text' value={bookTitle} onChange={handleInput} className='input' />
        <button className='button'> Create !</button>
      </form>
    </div>
  )
}

export default BookCreate