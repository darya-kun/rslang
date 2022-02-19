import React, {useState, useEffect} from 'react';
import GameSettings from '../GameSettings/GameSettings';
import AnswerButton from '../AnswerButton/AnswerButton';
import AudiocallVoice from '../AudiocallVoice/AudiocallVoice';
import AudiocallImg from '../AudiocallImg/AudiocallImg';
import getWord from '../../utils/getWord';
// Styles
import './AudiocallPage.css';

function setStorage() {
  localStorage.setItem('isClicked', true)
}

function AudiocallPage() {
  const numbers = JSON.parse(localStorage.getItem('wordsArr'));
  const answer = localStorage.getItem('answer');
  
  const level = localStorage.getItem('selectedIndexLevel');
  //const [obj, setObj] = useState();
  const [audio, setAudio] = useState(null);
  const [answerWord, setAnswerWord] = useState(null);

  const buttons = numbers.map((item, i) => 
     <AnswerButton key={i} i={i} item={item} answerWord={answerWord} />
  );

  function clickHandler() {
    setStorage();
  } 

  useEffect(() => { 
    async function fetchData() {
      try {
        const res = await getWord(level, answer);
        //setObj(res);
        setAudio(res.audio);
        setAnswerWord(res.wordTranslate);
      } catch (err) {
        console.log(err);
      }
    }
      fetchData();
  });

  const voice = <AudiocallVoice audioUrl={audio} />;
  const img = <AudiocallImg />;
  const isClicked = localStorage.getItem('isClicked');

  return (
    <div className="container">
      <section className='audiocall section'>
        <GameSettings />
        <div className='audiocall__wrapper'>
          {isClicked ? img : voice}
          <div className='audiocall__words'>
            <div className='audiocall__buttons'>
              {buttons}
            </div>
          </div>
          <div className='audiocall__help'>
            <button className='audiocall__button' onClick={clickHandler}>Не знаю</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AudiocallPage;