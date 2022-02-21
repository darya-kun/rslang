import React from 'react';
import GameSettings from '../GameSettings/GameSettings';
import {Link} from 'react-router-dom';
import './audiocallResult.css';

function AudiocallResult({result}) {

  return (
    <div className="container">
    <section className='audiocall section'>
      <GameSettings />
      <div className='audiocall__wrapper'>
      <div className="audiocall-popup-image">
        <div className="results-popup-image">
          <img className='results-popup-image__image' src='../img/cat-cheerleader.png' width='200' height='200' alt='Cheerleader cat'></img>
        </div>
      </div>
      <div className="audiocall__title">
        <span>Твой результат: 
          <span className='audiocall__answer'>
            {result} / 10
          </span>
        </span>
      </div>
      <div className="audiocall-popup__buttons">
          <button className="button button_audiocall" 
                  type="button" 
                  >Сыграй еще раз
          </button>
        <Link to='/games'>
          <button className="button button_audiocall" type="button">К списку игр</button>
        </Link>
      </div>
      </div>
        </section>
      </div>
          )
  }
  
  export default AudiocallResult;

  