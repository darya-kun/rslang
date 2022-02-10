import React from 'react';


const MenuListItem = ({title}) => {
    return (
        <div classMenu="menu-modal__content">
          <h4 classMenu="menu__name selected">{title}</h4>
        </div>
      )
}

export default MenuListItem;