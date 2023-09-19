import React, { useState } from 'react'
import bird from "./svg/bird.svg"
import cat from "./svg/cat.svg"
import cow from "./svg/cow.svg"
import dog from "./svg/dog.svg"
import gator from "./svg/gator.svg"
import heart from "./svg/heart.svg"
import horse from "./svg/horse.svg"
import './animal.css';

const svgMap = {
  bird,
  horse,
  gator,
  dog,
  cow,
  cat,
  heart
}

const Animal = ({ type }) => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  }

  return (
    <div onClick={handleClick} className='animal-show'>
      <img src={svgMap[type]} alt={type} className='animal'/>
      <img src={heart} alt={heart} style={{ width: 10 + 10 * clicks + 'px' }} className='heart' />
    </div>
  )
}

export default Animal