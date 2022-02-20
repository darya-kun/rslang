import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Service from '../Api/Api';
import { AudiocallGame } from '../../services/AudiocallGame';
import './AudiocallPopupAnswer.css';

const temp = new Service();

function AudiocallPopupAnswer({imgUrl, popUpVisible, closePopUp}) {
  const [rightAnswer, setRightAnswer] = useState();
  const [img, setImg] = useState();
  const [fontColor, setFontColor] = useState();
  const [reactionWord, setReactionWord] = useState();

  function clickNextButton() {
    AudiocallGame();

    closePopUp();
  }

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('audiocallAnswer'));
    if (storage && storage[0] === 'right') {
      setRightAnswer(storage[1]);
      setFontColor('green');
      setReactionWord('Супер!');
    } else if (storage && storage[0] === 'wrong') {
      setFontColor('red');
      setReactionWord('Ошибка!');
    }
  }, [])

  useEffect(() => {
    async function fetchData() {
      const [response, error] = await temp.getImage(imgUrl)
      if(error)
        console.log(error)
      else {
        setImg(response)
      }
    }
    fetchData();
  }, [imgUrl])

  return (
    <div className="audiocall-popup" style={{display: `${ popUpVisible === true ? 'flex' : 'none' }`}}>
      <div className="audiocall-popup-image">
        <img className='audiocall-popup-image__image' src={img} width='200' height='200' alt='right answer img'></img>
      </div>
      <div className="audiocall__title">
        {reactionWord} Правильный ответ: <span className='audiocall__answer' style={{color: `${fontColor}`}}>{rightAnswer}</span>
      </div>
      <div className="audiocall-popup__buttons">
        {/* Ссылка должна быть динамической и изменяться в зависимости от игры */}
          <button className="button button_audiocall" type="button" onClick={clickNextButton}>Следующее слово</button>
        <Link to='/games'>
          <button className="button button_audiocall" type="button">К списку игр</button>
        </Link>
      </div>
  </div>
          )
  }
  
  export default AudiocallPopupAnswer;

  