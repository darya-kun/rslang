import React from 'react';
import { Link } from 'react-router-dom';
import GameSettings from '../GameSettings/GameSettings';
// Styles
import './AudiocallGame.css'

export function AudiocallGame() {
  return (
    <div className="container">
      <section className='audiocall section'>
        <GameSettings />
        <div className='start-screen'>
          <div className='start-screen__description'>
            <h2 className='title_section'>Аудиовызов</h2>
            <p className='start-screen__text'>Тренировка Аудиовызов улучшает твое восприятие речи на слух.</p>
          </div>
          <div className='start-screen__game-start'>
            <h3 className='start-screen__title_level'>Выбери уровень:</h3>
            <div className='level-buttons'>
              <div className='level-button' role='button' tabIndex='0'>A1</div>
              <div className='level-button' role='button' tabIndex='0'>A2</div>
              <div className='level-button' role='button' tabIndex='0'>B1</div>
              <div className='level-button' role='button' tabIndex='0'>B2</div>
              <div className='level-button' role='button' tabIndex='0'>C1</div>
              <div className='level-button' role='button' tabIndex='0'>C2</div>
            </div>
            <button className='start-screen__button' type='button' disabled>
              <Link to='page'>Начать</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AudiocallGame;
