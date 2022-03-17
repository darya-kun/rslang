import React from 'react';
import StatisticWords from '../StatisticWords/StatisticWords';
import StatisticGames from '../StatisticGames/StatisticGames';
import './Statistic.css';

const Statistic = () => {
  return (
    <div className="container">
      <section className="statistic section">
        <h2 className="title_section">Статистика за день</h2>
        <StatisticWords />
        <StatisticGames />
        <div className="statistic-image">
          <img className="statistic-image__image" src='../img/cat-calculator.png' width='400' height='400' alt='calculator cat'></img>
        </div>
      </section>
    </div>
  )
}

export default Statistic;