import React from 'react';
import { Link } from 'react-router-dom';
import './GameResultsPopup.css';

const GameResultsPopup = () => {
  return (
      <div className="results-popup">
        <div className="results-popup__wrapper">
          <div className="results-popup-image">
            <img className='results-popup-image__image' src='../img/cat-cheerleader.png' width='200' height='200' alt='Cheerleader cat'></img>
          </div>
          <h2 className="results-popup__title">Отличный результат!</h2>
          <div className="results-popup__words results-words">
            <div className="results-words__list results-words__list_wrong">
              <div className="results-words__title">
                <span>Ошибок </span>
                <span className="count-label count-label__wrong">1</span>
              </div>
              <div className='results-words__item'>
                <i className="results-words__icon fas fa-volume-down"></i>
                <span className="results-words__word">month</span>
                <span className="results-words__translate"> - месяц</span>
              </div>
            </div>
            <div className="results-words__list results-words__list_right">
            <div className="results-words__title">
                <span>Знаю </span>
                <span className="count-label count-label__right">1</span>
              </div>
              <div className='results-words__item'>
                <i className="results-words__icon fas fa-volume-down"></i>
                <span className="results-words__word">week</span>
                <span className="results-words__translate"> - неделя</span>
              </div>
            </div>
          </div>
          <div className="results-popup__buttons">
            {/* Ссылка должна быть динамической и изменяться в зависимости от игры */}
            <Link to='/games/sprint'>
              <button className="button button_results" type="button">Сыграть еще раз</button>
            </Link>
            <Link to='/games'>
              <button className="button button_results"   type="button">К списку игр</button>
            </Link>
          </div>
        </div>
      </div>
  )
}

export default GameResultsPopup;