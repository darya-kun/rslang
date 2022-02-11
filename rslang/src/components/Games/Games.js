import React from 'react';
import PageListItem from '../PageListItem/PageListItem';
import { Link } from 'react-router-dom';
import './games.css';

const Games = () => {
  const gameCard = [
    { id: 1, selected: false, title: 'Спринт', src: './img/cat-writing.png', link: '/games/sprint'},
    { id: 2, selected: false, title: 'Аудиовызов', src: './img/cat-flute.png', link: '/games/audiocall'},
  ]

  const elements = gameCard.map((item) => {
    return <div><Link to={item.link}><PageListItem title={item.title} src={item.src}/></Link></div>
  });

  return (
    <main className='main'>
      <div className="cards-container">
        {elements}
      </div> 
    </main>
  )
}

export default Games;