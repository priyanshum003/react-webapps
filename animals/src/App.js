import React, { useState } from 'react'
import Animal from './Animal';
import "./app.css"
const getRandomAnimal = () => {
  const animal = ['cow', 'gator', 'bird', 'dog', 'horse', 'cat']
  return animal[Math.floor(Math.random() * animal.length)];
}

const App = () => {
  const [animals, setAnimals] = useState([]);
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  }


  return (
    <div className='app'>
      <button onClick={handleClick}> Add Animal</button>
      <div className='animal-list '>{animals.map((animal, i) => {
        return <Animal type={animal} key={i} />
      })}
      </div>
    </div>
  )
}

export default App