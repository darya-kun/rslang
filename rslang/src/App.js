import React, {useState} from 'react';
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cover from './components/Cover/Cover';
import PopUpMenu from './components/PopUpMenu/PopUpMenu';
import Dictionary from './components/Dictionary/Dictionary';
import DictionaryPage from './components/DictionaryPage/DictionaryPage';
import Statistic from './components/Statistic/Statistic';
import Games from './components/Games/Games';
import SprintGame from './components/SprintGame/SpringGame';
import AudiocallGame from './components/AudiocallGame/AudiocallGame';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const menuCard = [
    { id: 1, selected: false, title: 'авторизация', src: './img/cucumber.jpg', link: '/authorization'},
    { id: 2, selected: false, title: 'учебник', src: './img/carrot.jpg', link: '/dictionary'},
    { id: 3, selected: false, title: 'игры', src: './img/okra.jpg', link: '/games'},
    { id: 4, selected: false, title: 'статистика', src: './img/pumpkin.jpg', link: '/statistic'},
   ]

  const [visible, setVisible] = useState(false);
  const togglePopMenu = () => {
    return visible === false ? setVisible(true) : setVisible(false);
  }

  if(visible) {
    return (
      <Router>
        <div className='wrapper'>
          <Header togglePopMenu={togglePopMenu}/> 
          <Cover togglePopMenu={togglePopMenu}/>
          <div>
            <Routes>
              <Route path='/authorization' element={<Statistic/>} />
              <Route path='/' element={<HomePage cards={menuCard} />} exact/>
              <Route path='/dictionary' exact element={<Dictionary/>} />
           
              <Route path='/games' element={<Games/>} />
              <Route path='/statistic' element={<Statistic/>} />
              <Route path='/games/sprint' element={<SprintGame/>} />
              <Route path='/games/audiocall' element={<AudiocallGame/>} /> 
            </Routes>
          </div>
          <PopUpMenu cards={menuCard} togglePopMenu={togglePopMenu}/>
          <Footer/>
        </div>
      </Router>
    )
  } else {
      return (
        <Router>
          <div className='wrapper'>
            <Header togglePopMenu={togglePopMenu}/> 
            <div>
              <Routes>
                <Route path='/authorization' element={<Statistic/>} />
                <Route path='/' element={<HomePage cards={menuCard} />}/>
                <Route path='/dictionary/*' element={<Dictionary/>} />
                <Route path='/dictionary/1' element={<DictionaryPage/>} />
                <Route path='/games' element={<Games/>} />
                <Route path='/statistic' element={<Statistic/>} />
                <Route path='/games/sprint' element={<SprintGame/>} />
                <Route path='/games/audiocall' element={<AudiocallGame/>} /> 
              </Routes>
            </div>
            <Footer/>
          </div>
        </Router>
      )
    }
}

export default App