import React from 'react';
import { Link } from 'react-router-dom';
import GameSettings from '../GameSettings/GameSettings';
// Styles
import './AudiocallGame.css'

function AudiocallGame() {
  return (
    <div className="container">
      <section className='audiocall'>
        <GameSettings />
        <div className='start-screen'>
          <div className='start-screen__description'>
            <h1 className='start-screen__title'>Аудиовызов</h1>
            <p className='start-screen__text'>Тренировка Аудиовызов улучшает твое восприятие речи на слух.</p>
          </div>
          <div className='start-screen__game-start'>
            <h3 className='start-screen__title_level'>Выбери уровень:</h3>
            <div className='level-buttons'>
              <div className='level-button' role='button' tabindex='0'>A1</div>
              <div className='level-button' role='button' tabindex='0'>A2</div>
              <div className='level-button' role='button' tabindex='0'>B1</div>
              <div className='level-button' role='button' tabindex='0'>B2</div>
              <div className='level-button' role='button' tabindex='0'>C1</div>
              <div className='level-button' role='button' tabindex='0'>C2</div>
            </div>
            <Link to='/audiocall'>
              <button className='start-screen__button' type='button' disabled>Начать</button>
            </Link>
          </div>
        </div>
        <div className='audiocall__wrapper'>
          <div className='voice'>
            <button className='voice__button' type='button' aria-hidden='true'>
              <svg className='voice__icon' viewBox='0 0 24 24'>
                <path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z'></path>
              </svg>
            </button>
          </div>
          <div className='audiocall__words'>
            <div className='audiocall__buttons'>
              <button className='audiocall__button audiocall__button_answer' type='button'>
                1 вариант
              </button>
              <button className='audiocall__button audiocall__button_answer' type='button'>
                2 вариант
              </button>
              <button className='audiocall__button audiocall__button_answer' type='button'>
                3 вариант
              </button>
              <button className='audiocall__button audiocall__button_answer' type='button'>
                4 вариант
              </button>
              <button className='audiocall__button audiocall__button_answer' type='button'>
                5 вариант
              </button>
            </div>
          </div>
          <div className='audiocall__help'>
            <button className='audiocall__button'>Не знаю</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AudiocallGame;