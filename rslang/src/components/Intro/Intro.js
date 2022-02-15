import React from 'react';
import './Intro.css';

const Intro = () => {
  return (
    <section className="section intro">
      <div className="intro__wrapper">
        <div className="intro__description">
          <h2 className="intro__title">RS LANG</h2>
          <p className="intro__text">Удобное приложение для эффективного изучения английского языка в игровой форме.</p>
        </div>
        <img className="intro__image" src="./img/cat-diploma.png" alt="cat diploma"></img>
      </div>
    </section>
    );
}

export default Intro;