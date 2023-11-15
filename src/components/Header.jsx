import React, { useState } from 'react'
import './header.css'
import navListData from '../data/navListData'
import NavListItem from './NavListItem';
import { Link, useLocation } from 'react-router-dom';


const Header = () => {
  const [open, setOpen] = useState(false);
  const [navList, setNavList] = useState(navListData);
  const location = useLocation();

  const handleToggleMenu = () => {
    setOpen(!open)
  }

  const handleNavOnClick = (id) => {
    const newNavList = navList.map(nav => {
      nav.active = false;
      if (nav._id === id) nav.active = true;
      return nav;
    });
    setNavList(newNavList);
  }

  return (
    <header>
      <a href="/" className="logo" style={ location.pathname === '/' ? {color:'#000000'} : {color:'#ffffff'}}>Vehicle</a>
      <div>
        <Link to='/library' className="like">
          <i className="bi bi-heart-fill"></i>
          <span className="likeNumbers">0</span>
        </Link>
        <a href="#" className="menu" onClick={handleToggleMenu}>
          {open ? <i className="bi bi-x-lg"></i> :  <i className="bi bi-list"></i>}
        </a>
      </div>
      <ul className={`nav ${open ? 'active' : undefined}`}>
        {navListData.map(nav => <NavListItem key={nav._id} nav={nav} navOnClick={handleNavOnClick}/>)}
      </ul>
    </header>
  )
}

export default Header