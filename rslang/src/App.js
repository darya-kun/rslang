import React from 'react';
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';
import PopUpMenu from './components/PopUpMenu/PopUpMenu';
import Dictionary from './components/Dictionary/Dictionary';
import Statistic from './components/Statistic/Statistic';
import Games from './components/Games/Games';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const menuCard = [
    { id: 1, selected: false, title: 'учебник', src: './img/carrot.jpg', link: '/dictionary'},
    { id: 2, selected: false, title: 'игры', src: './img/okra.jpg', link: '/games'},
    { id: 3, selected: false, title: 'статистика', src: './img/pumpkin.jpg', link: '/statistic'},
    { id: 4, selected: false, title: 'еще что-то', src: './img/cucumber.jpg', link: '/something'}
   ]

  return (
  <div className='wrapper'>
    <Header cards={menuCard}/>
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage cards={menuCard} />}/>
        <Route path='/dictionary' element={<Dictionary/>} />
        <Route path='/games' element={<Games/>} />
        <Route path='/statistic' element={<Statistic/>} />
      </Routes>
    </Router>
    </div>
    <PopUpMenu cards={menuCard} />
  </div>
  )
}

export default App