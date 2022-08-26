import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';
import searchIcon from '../../images/search-icon.png';

function Navbar() {
  return (
    <ul className='navbar'>
      <NavLink to='/whatsnew' className='navbar-element'>
        What’s New
      </NavLink>
      <NavLink to='/mencollections' className='navbar-element'>
        Men
      </NavLink>
      <NavLink to='/womencollections' className='navbar-element'>
        Women
      </NavLink>
      <NavLink to='/kidscollections' className='navbar-element'>
        Kids
      </NavLink>
      <NavLink to='/personalizecollections' className='navbar-element'>
        Personalize
      </NavLink>
      <NavLink to='/collections' className='navbar-element'>
        Collections
      </NavLink>
      <NavLink to='/sales' className='navbar-element'>
        Sales
      </NavLink>
      <NavLink className='icons-search' to='/8'>
        <img className='icons-image' alt='search' src={searchIcon} />
      </NavLink>
    </ul>
  );
}

export default Navbar;
