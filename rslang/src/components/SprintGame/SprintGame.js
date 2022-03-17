import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GameSettings from '../GameSettings/GameSettings';
// Styles
import './SprintGame.css'

function SprintGame() {
  const [checked, setChecked] = useState(false);

  function chengeCheckbox() {
    setChecked(!checked);
  }

  return (
    <div className="container">
      <section className='sprint section'>
        <GameSettings />
        <div className='start-screen'>
          <div className='start-screen__description'>
            <h2 className='title_section'>СПРИНТ</h2>
            <p className='start-screen__text'>Спринт - тренировка на скорость. Попробуй угадать как можно больше слов за 30 секунд.</p>
          </div>
          <div className='start-screen__game-start'>
            <h3 className='start-screen__title_level'>Выбери уровень:</h3>
            <div className='level-buttons'>
              <div className={ checked ? 'level-button' : 'level-button active'} role='button' onChange={chengeCheckbox}>A1</div>
              <div className='level-button' role='button' >A2</div>
              <div className='level-button' role='button' >B1</div>
              <div className='level-button' role='button' >B2</div>
              <div className='level-button' role='button' >C1</div>
              <div className='level-button' role='button' >C2</div>
            </div>
            <Link to='/sprint'>
              <button className='start-screen__button' type='button'>Начать</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SprintGame;