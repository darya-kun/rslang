import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Service from '../Api/Api';
import './AudiocallPopupAnswer.css';

const temp = new Service();

function AudiocallPopupAnswer({imgUrl}) {
  const [rightAnswer, setRightAnswer] = useState();
  const [img, setImg] = useState();
  const [fontColor, setFontColor] = useState();
  const [visible, setVisible] = useState('none');
  const [storage, setStorage] = useState();

  function clickNextButton() {
    localStorage.setItem('audiocallAnswer', [])
    
  }

  useEffect(() => {
    const storagel = JSON.parse(localStorage.getItem('audiocallAnswer'));
      setStorage(storagel);
    console.log(storagel)
    if (storagel && storagel[0] === 'right') {

      setRightAnswer(storagel[1]);
      setFontColor('green');
      console.log(rightAnswer, visible);
      setVisible('flex');
    } else if (storagel && storagel[0] === 'wrong') {
      setFontColor('red');
      setVisible('flex');
      console.log( visible)
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
  //popUpVisible === true ? setVisible('flex') : setVisible('none')
  return (
    <div className="audiocall-popup" style={{display: `${visible}`}}>
      <div className="audiocall-popup-image">
        <img className='audiocall-popup-image__image' src={img} width='200' height='200' alt='right answer img'></img>
      </div>
      <div className="audiocall__title">
        Правильный ответ: <span className='audiocall__answer' style={{color: `${fontColor}`}}>{rightAnswer}</span>
      </div>
      <div className="audiocall-popup__buttons">
        {/* Ссылка должна быть динамической и изменяться в зависимости от игры */}
        <Link to=''>
          <button className="button button_audiocall" type="button" onClick={clickNextButton}>Следующее слово</button>
        </Link>
        <Link to='/games'>
          <button className="button button_audiocall" type="button">К списку игр</button>
        </Link>
      </div>
  </div>
          )
  }
  
  export default AudiocallPopupAnswer;

  