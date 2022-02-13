import React from 'react';
import PageListItem from '../PageListItem/PageListItem';
import AboutUsCard from '../AboutUsCard/AboutUsCard';
import { Link } from 'react-router-dom';
import './homePage.css';

function HomePage({cards}) {
  const aboutUs = [
    { id: 1, title: 'darya-kun', src: '/img/cat-books.png'},
    { id: 2, title: 'alionamu', src: '/img/cat-pencil.png'},
    { id: 3, title: 'kolyamoloko', src: '/img/cat-backpack.png'}
   ]

  const elements = cards.map((item) => {
    return <div key={item.id}><Link to={item.link}><PageListItem title={item.title} src={item.src}/></Link></div>
  });

  const aboutUsCards = aboutUs.map((item) => {
    return <div key={item.id}><AboutUsCard title={item.title} src={item.src}/></div>
  });
  return (
    <main className='main'>
      <div className="cards-container">
        {elements}
      </div>
      <div class="about-us">
        <h3 class="about-us__title">Наша команда</h3>
          <div class="about-us__content">
            {aboutUsCards}        
          </div>     
      </div>
    </main>
  )
}
  
  export default HomePage;