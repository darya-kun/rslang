import React from 'react';
import Burger from '../Burger/Burger'

const Header = ({togglePopMenu}) => {
  
  return (
    <div className='header'>
      <Burger togglePopMenu={togglePopMenu}/>
      <h1 className="h1">RS-Lang</h1>
      <button className="header__button button">register new player</button>
    </div>
  )
}

export default Header;