import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Service from '../Api/Api';
import { AudiocallGame } from '../../services/AudiocallGame';
import './AudiocallPopupAnswer.css';

const temp = new Service();

function AudiocallPopupAnswer({imgUrl, popUpVisible, closePopUp, countWords}) {
  const [rightAnswer, setRightAnswer] = useState();
  const [img, setImg] = useState();
  const [fontColor, setFontColor] = useState();
  const [reactionWord, setReactionWord] = useState();



  function clickNextButton() {
    AudiocallGame();
    closePopUp();
    const answeredWords = countWords();
    console.log(answeredWords, 'answeredWords')
  }

  const text = 'Правильный ответ:  '
  /*const linkToResults = <Link to='/games/result'>
                          <button className="button button_results" type="button">Результаты</button>
                        </Link>;*/
  const next = <button className="button button_audiocall" 
                       type="button" 
                       onClick={clickNextButton}>Следующее слово
                </button>;

/*useEffect(() => {
  if (answeredWords > 3) {
    setButton(linkToResults)
  } else {
    setButton(next)
  }
},[answeredWords] )*/

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('audiocallAnswer'));
    if (storage && storage[0] === 'right') {
      setRightAnswer(storage[1]);
      setFontColor('#28c38a');
      setReactionWord('Супер!');
    } else if (storage && storage[0] === 'wrong') {
      setRightAnswer(storage[1]);
      setFontColor('#ed593b');
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
        <img className='audiocall-popup-image__image' src={img} width='200' 
             height='200' alt='right answer img'></img>
      </div>
      <div className="audiocall__title">
        <span style={{color: `${fontColor}`}}>{reactionWord}</span>
        <span>{ text }   
          <span className='audiocall__answer' style={{color: `${fontColor}`}}>
            { rightAnswer }
          </span>
        </span>
      </div>
      <div className="audiocall-popup__buttons">
        {/* Ссылка должна быть динамической и изменяться в зависимости от игры */}
        { next }
        <Link to='/games'>
          <button className="button button_audiocall" type="button">К списку игр</button>
        </Link>
      </div>
  </div>
          )
  }
  
  export default AudiocallPopupAnswer;

  