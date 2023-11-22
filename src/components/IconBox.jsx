import React from 'react'
import './iconBox.css';

const IconBox = ({icon, title, description}) => {
  return (
    <div className="icon-box">
                <div className="icon">
              {/* <i className='bx bx-tachometer'></i> */}
              <i className={icon}></i>
                </div>
                <h4 className="title">
        {/* <a href="#">{title}</a> */}
                  <span>{title}</span>
        
                </h4>
                <p className="description">{description ? description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, dolorum"}</p>
              </div>
  )
}

export default IconBox