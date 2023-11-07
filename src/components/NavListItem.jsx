import React from 'react'
import './navListItem.css'

const NavListItem = ({nav}) => {
  return (
      <li>
          <a href="#">{nav.name}</a>
    </li>
  )
}

export default NavListItem