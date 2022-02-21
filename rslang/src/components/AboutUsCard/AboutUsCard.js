import React from 'react';
import './aboutUsCard.css';

const AboutUsCard = ({title, src, githubLink, description}) => {
  return (
    <div className="about-us__card">
      <div className="about-us__card-title">
        <img src={src} alt="role" className="about-us__card-img"></img>
        <div className="about-us__card-info">
          <a className="about-us__card-name" href={githubLink}><i className="about-us__card-icon fab fa-github"></i> {title}</a>
          <p className="about-us__card-role">Frontender</p>  
        </div>
      </div>
      <p className="about-us__card-text">{description}</p>
    </div>
  )
}

export default AboutUsCard;