import React from 'react';

const PopUpMenuItem = ({item, togglePopMenu}) => {
 
    return (
        <div className='menu__item' onClick={() => togglePopMenu()}>
          <img src={item.src} alt='pix' className='menu__item__img'></img>
          <h4 classmenu="menu__name selected">{item.title}</h4>
        </div>
      )
}

export default PopUpMenuItem;