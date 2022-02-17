import React from 'react';
import { Link } from 'react-router-dom';
import './DictionaryGameLinks.css';

const DictionaryGameLinks = ({id, src}) => {
  return (
    <div className='dictionary-game'>
      <div className='dictionary-game__container'>
        <p className='dictionary-game__description'>Закрепи новые слова при помощи игр!</p>
        <div className='dictionary-game__buttons'>
          <Link to='/games/sprint'>
            <button className='button button_dictionary'>Спринт</button>
          </Link>
          <Link to='/games/audiocall'>
            <button className='button button_dictionary'>Аудиовызов</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DictionaryGameLinks;