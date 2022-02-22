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
import SprintGame from './components/SprintGame/SprintGame';
import AudiocallStartscreen from './components/AudiocallStartscreen/AudiocallStartscreen';
import AudiocallPage from './components/AudiocallPage/AudiocallPage';
import AudiocallResult from './components/AudiocallResult/AudiocallResult';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Autorization from './components/Autorization/Autorization';
import Registration from './components/Registration/Registration';
import Sprint from './components/Sprint/Sprint';

const App = () => {
  const menuCard = [
    { id: 1, selected: false, title: 'авторизация', description: 'Авторизованный пользователь может настраивать интерфейс под себя', src: './img/cat-backpack.png', link: '/authorization'},
    { id: 2, selected: false, title: 'учебник', description: 'Более 3500 тысяч слов для изучения, разбитых на разделы по уровню твоей подготовки с удобной навигацией', src: './img/cat-books.png', link: '/dictionary'},
    { id: 3, selected: false, title: 'игры', description: 'Увлекательные игры на развитие запоминания слов и восприятия на слух', src: './img/cat-puzzle.png', link: '/games'},
    { id: 4, selected: false, title: 'статистика', description: 'Отслеживай свой прогресс в индивидуальной статистике, ставь цели и вдохновляйся на и достижение новых результатов каждый день!', src: './img/cat-calculator.png', link: '/statistic'},
   ]

  const [visible, setVisible] = useState(false);
  const togglePopMenu = () => {
    return visible === false ? setVisible(true) : setVisible(false);
  }

  console.log(
    `
    ССЫЛКА НА PR https://github.com/darya-kun/rslang/pull/61. Да, именно её мы должны были отправить тебе на проверку, на там в канцелярии что-то напутали и, увы, вышло как вышло. Приносим искренние извинения за неудобство!


    Привет, котик! 🐱 
    Надеемся, что наше приложение придется тебе по вкусу. Ну а если что-то не работает, то это только потому, что у нас лапки. 🙃
    Удачи на курсе!

    Итого: 415 б.

    Главная страница приложение +40
    1) 20
    2) 20

    Авторизация +40
    ! Чтобы успешно пройти регистрацию, нужно, чтобы почта была указана по схеме username@gmail.com, пароль минимум 8 символов. 
    1) 10
    2) 10
    3) 10
    4) 10
    5) -

    Электронный учебник +70
    1) 20
    2) 20
    3) 10 (не завязано с авторизацией, но есть)
    4) 20

    Список слов +60
    1) 30
    2) 30
    3) 0

    Аудиовызов +80
    1) 20
    2) 20
    3) 0
    4) 10 (только мышкой)
    5) 15
    6) 15

    Спринт +20
    1) 0 
    2) 20
    3) 0
    4) 0
    5) 0
    6) 0

    Прогресс изучения +25
    1) 25
    2) 0

    Изученные слова +20
    1) 0
    2) 10
    3) 0
    4) 0
    5) 0
    6) 10

    Страница статистика +20
    1) 20 (верстка)

    Дополнительный функционал +40
    1) 0
    2) 40 Высокое качество оформления приложения + дополнительный функционал - возможность смены темы на светлую/темную
    `
  );

  if(visible) {
    return (
      <Router>
          <Header togglePopMenu={togglePopMenu}/> 
          <Cover togglePopMenu={togglePopMenu}/>
          <main className="main">
            <div className="container">
            <Routes>
              <Route path='/authorization' element={<Autorization/>} />
              <Route path='/registration' element={<Registration/>} />
              <Route path='/' element={<HomePage cards={menuCard} />} exact/>
              <Route path='/dictionary/:id' element={<Dictionary/>} />
              <Route path='/authorization' element={<Autorization/>} />
              <Route path='/games' element={<Games/>} />
              <Route path='/sprint' element={<Sprint/>} />
              <Route path='/statistic' element={<Statistic/>} />
              <Route path='/games/sprint' element={<SprintGame/>} />
              <Route path='/games/audiocall' element={<AudiocallStartscreen/>} /> 
              <Route path='/games/audiocall/result' element={<AudiocallResult/>} /> 
              <Route path='/games/audiocall/:page' element={<AudiocallPage/>} /> 
            </Routes>
            </div>
          </main>
          <PopUpMenu cards={menuCard} togglePopMenu={togglePopMenu}/>
          <Footer/>
      </Router>
    )
  } else {
      return (
        <Router>
            <Header togglePopMenu={togglePopMenu}/> 
            <main className="main">
              <Routes>
                <Route path='/authorization' element={<Autorization/>} />
                <Route path='/registration' element={<Registration/>} />
                <Route path='/' element={<HomePage cards={menuCard} />}/>
                <Route path='/dictionary' element={<Dictionary/>} />
                <Route path='/dictionary/:chapter/:id/:pages/:num' 
                  element={<DictionaryPage />}/>
                <Route path='/games' element={<Games/>} />
                <Route path='/sprint' element={<Sprint/>} />
                <Route path='/statistic' element={<Statistic/>} />
                <Route path='/games/sprint' element={<SprintGame/>} />
                <Route path='/games/audiocall' element={<AudiocallStartscreen/>} /> 
                <Route path='/games/audiocall/result' element={<AudiocallResult/>} /> 
                <Route path='/games/audiocall/:page' element={<AudiocallPage/>} /> 
              </Routes>
            </main>
            <Footer/>
        </Router>
      )
    }
}

export default App