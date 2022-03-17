import React from 'react';


const MenuListItem = ({menuCard, key}) => {
  return <span className="card-contain__text_title" key={key}>{menuCard.title}</span>
}

export default MenuListItem;