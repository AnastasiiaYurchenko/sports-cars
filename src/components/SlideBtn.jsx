import React from 'react'
import './slideBtn.css'

const SlideBtn = ({index, slideChange}) => {
  return (
      <a href="#" className="slide-btn" onClick={()=>slideChange(index)}>
          <i className="bi bi-play-fill"></i>
    </a>
  )
}

export default SlideBtn