import React from 'react';
import './StatisticGames.css';

const StatisticGames = () => {
  return (
    <div className="statistic-games">
      <h2 className="title_section">Статистика по играм</h2>
      <div className="statistic-games__wrapper">
        <div className="statistic-games__card">
          <h3 className="statistic-games__title">Спринт</h3>
          <ul className="statistic-games__list">
            <li className="statistic-games__item">
              <i className="statistic-games__icon fas fa-check"></i>
              Слов изучено: 0
            </li>
            <li className="statistic-games__item">
              <i className="statistic-games__icon fas fa-check"></i>
              Правильных ответов: 0 % 
            </li>
            <li className="statistic-games__item">
              <i className="statistic-games__icon fas fa-check"></i>
              Самая длинная серия правильных ответов: 0
            </li>
          </ul>
        </div>
        <div className="statistic-games__card">
          <h3 className="statistic-games__title">Аудиовызов</h3>
          <ul className="statistic-games__list">
            <li className="statistic-games__item">
              <i className="statistic-games__icon fas fa-check"></i>
              Слов изучено: 0
            </li>
            <li className="statistic-games__item">
              <i className="statistic-games__icon fas fa-check"></i>
              Правильных ответов: 0 % 
            </li>
            <li className="statistic-games__item">
              <i className="statistic-games__icon fas fa-check"></i>
              Самая длинная серия правильных ответов: 0
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default StatisticGames;