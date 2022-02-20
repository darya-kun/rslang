import React from 'react';
import PageListItem from '../PageListItem/PageListItem';
import { Link } from 'react-router-dom';
import './games.css';
import clearStorageFromAudiocallData from '../../utils/clearStorageFromAudiocallData';

const Games = () => {
  const gameCard = [
    { id: 1, selected: false, title: 'Спринт', src: './img/cat-writing.png', link: '/games/sprint'},
    { id: 2, selected: false, title: 'Аудиовызов', src: './img/cat-flute.png', link: '/games/audiocall'},
  ]

  const elements = gameCard.map((item) => {
    return <div className="games-card" key={item.id}><Link to={item.link}><PageListItem title={item.title} src={item.src} onClick={clearStorageFromAudiocallData}/></Link></div>
  });

  return (
    <div className="container">
      <section className="games">
        {elements}
      </section> 
    </div>
  )
}

export default Games;