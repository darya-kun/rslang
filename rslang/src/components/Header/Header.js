import React from 'react';
import MenuListItem from '../MenuListItem/MenuListItem';
import { Link } from 'react-router-dom';

const H1 = () => {
  return <h1 className="h1">RS-Lang</h1>
}


const Header = ({cards}) => {

  const elements = cards.map((item) => {

    return <li key={item.id}><MenuListItem menuCard={item.title} /></li>
    });
    
    return (
      <div className='header'>
        <span className="header__hamburger hamburger opened" onClick={()=> {console.log('для анимации меню добавить класс transition к элементу с классом modal')}}><span className="hamburger__line"></span></span>
        <h1 className="h1">RS-Lang</h1>
        <ul className="header__menu">
          { elements }
        </ul>
        <button className="header__button button">register new player</button>
      </div>
    )
}

export default Header;