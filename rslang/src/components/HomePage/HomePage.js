import React from 'react';
import Intro from '../Intro/Intro';
import PageListItem from '../PageListItem/PageListItem';
import AboutUsCard from '../AboutUsCard/AboutUsCard';
import { Link } from 'react-router-dom';
import './homePage.css';

function HomePage({cards}) {
  const aboutUs = [
    { id: 1, title: 'Даша', src: '/img/avatar-darya.png', githubLink: 'https://github.com/darya-kun', description: 'Ответственная за дизайн приложения, его верстку и котиков :) Разработала главную страницу, пагинацию в учебнике, начальные экраны игр, а также переключатель light и dark темы.' },
    { id: 2, title: 'Алёна', src: '/img/avatar-aliona.png', githubLink: 'https://github.com/AlionaMu', description: 'Тимлид, ответственная за архитектуру приложения. Разработала Учебник и игру "Аудиовызов".' },
    { id: 3, title: 'Коля', src: '/img/avatar-kolya.png', githubLink: 'https://github.com/kolyamoloko', description: 'Ответственный за бэкенд, регистрацию и авторизацию. Разработал игру "Спринт", а также привел в порядок пагинацию в учебнике.' }
   ]

  const elements = cards.map((item) => {
    return <div key={item.id}><Link to={item.link}><PageListItem title={item.title} description={item.description} src={item.src}/></Link></div>
  });

  const aboutUsCards = aboutUs.map((item) => {
    return <div key={item.id}><AboutUsCard title={item.title} src={item.src} githubLink={item.githubLink} description={item.description}/></div>
  });

  return (
    <div className="container">
      <Intro />
      <section className="section advantages">
        <h2 className="title_section">Преимущества</h2>
        <div className="advantages__wrapper">
          {elements}
        </div>
      </section>
      <section className="about-us">
        <h3 className="title_section">Наша команда</h3>
        <div className="about-us__content">
          {aboutUsCards}
        </div>
      </section>
    </div>
  )
}
  
  export default HomePage;