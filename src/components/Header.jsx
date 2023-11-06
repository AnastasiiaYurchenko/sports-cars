import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header>
      <a href="/" className="logo">Vehicle</a>
      <div>
        <a href="#" className="like">
          <i className="bi bi-heart-fill"></i>
        </a>
        <a href="#" className="menu">
          <i className="bi bi-list"></i>
          <i className="bi bi-x-lg"></i>
        </a>
      </div>
    </header>
  )
}

export default Header