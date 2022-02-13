import React from 'react';
import './dictionaryUnit.css';

const DictionaryUnit = ({id, src}) => {

  return (
  <div className='dictionary-unit'>
    <div className='dictionary-unit__contain'>
      <div className='dictionary-unit__text'>Раздел {id}</div>
    </div>
    <img src={src} className='dictionary-unit__image' alt='pix'></img>
  </div>
  )
}

export default DictionaryUnit;