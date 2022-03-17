import React from 'react';

const PageListItem = ({title, description, key, src}) => {

  return (
  <div className='card'>
    <img src={src} className='card-image' alt='pix'></img>
    <div className='card-contain'>
      <div className='card-contain__text'>
        <span className='card-contain__text_title'>{title}</span>
        <p className='card-contain__description'>{description}</p>
      </div>
    </div>
  </div>
  )
}

export default PageListItem;