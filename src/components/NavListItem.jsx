import React from 'react'
import './navListItem.css'

const NavListItem = ({nav}) => {
  return (
      <li>
          <a className={nav.active ? 'active' : undefined } href="#">{nav.name === "home" ? <i className="bi bi-house-door"></i> : nav.name}</a>
    </li>
  )
}

export default NavListItem