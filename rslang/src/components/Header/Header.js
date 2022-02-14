import React from 'react';
import Burger from '../Burger/Burger';
import { Link } from 'react-router-dom';
import './header.css';

const Header = ({togglePopMenu}) => {
  
  return (
    <header className='header'>
      <div className="container">
        <div className="header__wrapper">
          <Burger togglePopMenu={togglePopMenu}/>
          <Link className="title-link" to="/">
            <h1 className="title">RS-Lang</h1>
          </Link>
          <button className="header__button button">Войти</button>
        </div>
      </div>
    </header>
  )
}

export default Header;