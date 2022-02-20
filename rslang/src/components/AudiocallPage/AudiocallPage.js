import React, {useState, useEffect} from 'react';
import GameSettings from '../GameSettings/GameSettings';
import AnswerButton from '../AnswerButton/AnswerButton';
import AudiocallVoice from '../AudiocallVoice/AudiocallVoice';
import AudiocallPopupAnswer from '../AudiocallPopupAnswer/AudiocallPopupAnswer';
import getWord from '../../utils/getWord';
// Styles
import './AudiocallPage.css';

function AudiocallPage() {
  const numbers = JSON.parse(localStorage.getItem('wordsArr'));
  const answer = localStorage.getItem('answer');
  
  const level = localStorage.getItem('selectedIndexLevel');
  const [imgUrl, setImgUrl] = useState();
  const [audio, setAudio] = useState(null);
  const [answerWord, setAnswerWord] = useState(null);
  const [visible, setVisible] = useState(false);

  const popUp = () => {
    setVisible(true);
    return answerWord
  }

  const closePopUp = () => {
    setVisible(false);
    return answerWord
  }

  const buttons = numbers.map((item, i) => 
     <AnswerButton key={i} i={i} item={item} answerWord={answerWord} img={imgUrl} popUp={popUp}/>
  );

  useEffect(() => { 
    async function fetchData() {
      try {
        const res = await getWord(level, answer);
        setImgUrl(res.image);
        setAudio(res.audio);
        setAnswerWord(res.wordTranslate);
      
      } catch (err) {
        console.log(err);
      }
    }
      fetchData();
  });
  

  if (visible) {
    return (
      <div className="container">
        <section className='audiocall section'>
          <GameSettings />
          <div className='audiocall__wrapper'>
            <AudiocallVoice audioUrl={audio} />
            <div className='audiocall__words'>
              <div className='audiocall__buttons'>
                {buttons}
              </div>
            </div>
            <div className='audiocall__help'>
              <button className='audiocall__button'>Не знаю</button>
            </div>
          </div>
        </section>
        <AudiocallPopupAnswer imgUrl={imgUrl} popUpVisible={visible} closePopUp={closePopUp}/>
      </div>
    )
  } else {
    return (
      <div className="container">
        <section className='audiocall section'>
          <GameSettings />
          <div className='audiocall__wrapper'>
            <AudiocallVoice audioUrl={audio} />
            <div className='audiocall__words'>
              <div className='audiocall__buttons'>
                {buttons}
              </div>
            </div>
            <div className='audiocall__help'>
              <button className='audiocall__button'>Не знаю</button>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default AudiocallPage;