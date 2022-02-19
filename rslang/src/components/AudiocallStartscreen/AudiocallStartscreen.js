import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import GameSettings from '../GameSettings/GameSettings';
import { AudiocallGame } from '../../services/AudiocallGame';
import LevelButton from '../LevelButton/LevelButton';
// Styles
import './AudiocallStartscreen.css';

export function AudiocallStartscreen() {

  //const [buttonColor, setColor] = useState();
  const [disabled, setDisabled] = useState();
  
  //disabled ? setColor('#d4d4d4') : setColor('#ee974e')
  const buttonStyle = {
    backgroundColor: disabled ? '#d4d4d4' : '#ee974e'
  }
  const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const buttons = levels.map((item, i) => {
    return <LevelButton key={i} value={item} i={i} />
  });
  useEffect(() => {
    const storage = localStorage.getItem('selectedLevel');
    if (storage) {
     // setColor('#ee974e');
      setDisabled(false);
    }
  }, [])

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
              {buttons}
            </div>
            <Link to='page'>
              <button className='start-screen__button' type='button' style={buttonStyle} disabled={disabled} onClick={AudiocallGame}>Начать</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AudiocallStartscreen;
