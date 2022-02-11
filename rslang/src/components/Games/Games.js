import React from 'react';
// import PageListItem from '../PageListItem/PageListItem';
import { Link } from 'react-router-dom';
// import SprintGame from '../SprintGame/SpringGame';
// import AudiocallGame from '../AudiocallGame/AudiocallGame';
// import { Route, Routes } from 'react-router-dom';
import './games.css';

const Games = () => {
  // const gameCard = [
  //   { id: 1, selected: false, title: 'Спринт', src: './img/carrot.jpg', link: '/sprint'},
  //   { id: 2, selected: false, title: 'Аудиовызов', src: './img/okra.jpg', link: '/audiocall'},
  // ]

  // const elements = cards.map((item) => {
  //   return <li><Link to={item.link}><PageListItem title={item.title} src={item.src}/></Link></li>
  // });

  return (
    <main className='main'>
      <div className="cards-container">
        <Link to='/sprint'>
          <div className='card card_game'>
            <img src='' className='card-image' alt='sprint card'></img>
            <div className='card-contain'>
              <div className='card-contain__text'>
                <span className='card-contain__text_title'>Спринт</span>
              </div>
            </div>
          </div>
        </Link>
        <Link to='/audiocall'>
          <div className='card card_game'>
            <img src='' className='card-image' alt='sprint card'></img>
            <div className='card-contain'>
              <div className='card-contain__text'>
                <span className='card-contain__text_title'>Аудиовызов</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
      {/* <Routes>
        <Route path='/sprint' element={<SprintGame/>} />
        <Route path='/audiocall' element={<AudiocallGame/>} /> 
      </Routes> */}
    </main>
  )
}

export default Games;