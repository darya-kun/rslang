import React from 'react';
import Burger from '../Burger/Burger';
import { Link } from 'react-router-dom';
import './header.css';

const Header = ({togglePopMenu}) => {
  
  return (
    <header className='header'>
      <Burger togglePopMenu={togglePopMenu}/>
      <Link to="/" style={{ textDecoration: 'none', color: 'grey' }}><h1 className="h1">RS-Lang</h1></Link>
      <button className="header__button button">register new player</button>
    </header>
  )
}

export default Header;