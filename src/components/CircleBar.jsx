import React from 'react'
import './circleBar.css';

const CircleBar = ({number, name, color}) => {
  return (
      <div className='percentage'>
          <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
          </svg>
          <div className="number">
              <h2>{number}%<span className='title'>{name}</span></h2>
          </div>
    </div>
  )
}

export default CircleBar