import React from 'react';


const MenuListItem = ({title}) => {
    return (
        <div class="menu-modal__content">
          <h4 class="menu__name selected">{title}</h4>
        </div>
      )
}

export default MenuListItem;