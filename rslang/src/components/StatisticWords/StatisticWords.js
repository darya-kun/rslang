import React from 'react';
import './StatisticWords.css';

const StatisticWords = () => {
  return (
    <div className="statistic-words">
      <div className="statistic-words__wrapper">
        <span className="statistic-words__number">0</span>
        <span className="statistic-words__description">новых слов</span>
      </div>
      <div className="statistic-words__wrapper">
        <span className="statistic-words__number">0</span>
        <span className="statistic-words__description">слов изучено</span>
      </div>
      <div className="statistic-words__wrapper">
        <span className="statistic-words__number">0 %</span>
        <span className="statistic-words__description">правильных ответов</span>
      </div>
    </div>
  )
}

export default StatisticWords;