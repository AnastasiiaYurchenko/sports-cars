import React from 'react'
import './slideBtn.css'

const SlideBtn = ({index, slideChange}) => {
  return (
    //   <a href="#" className="slide-btn" onClick={()=>slideChange(index)}>
    //       <i className="bi bi-play-fill"></i>
    // </a>
    <span className="slide-btn" onClick={() => slideChange(index)}>
      <p>Next slide</p>
      <i className="bi bi-play-fill"></i>
        </span>
  )
}

export default SlideBtn