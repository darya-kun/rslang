import React from 'react';

const Burger = ({togglePopMenu}) => {
  return (
    <span className="header__hamburger hamburger opened" onClick={() => togglePopMenu()}>
      <span className="hamburger__line"></span>
    </span>
  )
}

export default Burger;