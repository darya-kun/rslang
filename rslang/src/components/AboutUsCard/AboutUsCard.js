import React from 'react';
import './aboutUsCard.css';

const AboutUsCard = ({title, src}) => {
  return (
    <div className="about-us__card">
      <div className="about-us__card__title">
        <img src={src} alt="role" className="about-us__card__img"></img>
        <div className="about-us__card__info">
          <p className="about-us__card__name">{title}</p>
          <p className="about-us__card__role"> Frontender</p>  
        </div>
      </div>
      <p className="about-us__card__text">"Thank you so much for these wonderful live webcams of the eagles on Catalina Island.
      Being able to watch them in "</p>
    </div>
  )
}

export default AboutUsCard;