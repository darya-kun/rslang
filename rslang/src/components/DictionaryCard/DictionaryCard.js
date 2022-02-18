import React, {useEffect, useState} from 'react';
import Service from '../Api/Api';
import './dictionaryCard.css';

const temp = new Service();

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  audio.play();
}

const DictionaryCard = ({item}) => {
  const urlAudio = item.audio;
  const play = useAudio(`https://react-learnwords-example.herokuapp.com/${urlAudio}`);
  
  const [screenShot, setScreenshot] = useState(undefined);
  const urlImage = item.image;
 
  useEffect(() => {
    async function fetchData() {
      const [response, error] = await temp.getImage(urlImage)
      if(error)
        console.log(error)
      else {
        setScreenshot(response)
      }
    }
    fetchData();
  }, [urlImage])

  return (
  <div className='dictionary-card'>
    <img src={screenShot} className='dictionary-card__image' alt='pix'></img>
    <div className='dictionary-card__contain'>
      <div className='dictionary-card__main-text'>
        <div className="game-settings__button audio-button" onClick={play}>
          <svg className="game-settings__icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path>
          </svg>
        </div>
        <div className='dictionary-card__main-text__item'>{item.word} - {item.transcription}</div>
        <div className='dictionary-card__main-text__item main-item_thin'>{item.wordTranslate}</div>
      </div>
      <div className='dictionary-card__text'>{item.textMeaning}</div>
      <div className='dictionary-card__text item_thin'>{item.textMeaningTranslate}</div>
      <div className='dictionary-card__text'>{item.textExample}</div>
      <div className='dictionary-card__text item_thin'>{item.textExampleTranslate}</div>
    </div>
  </div>
  )
}

export default DictionaryCard;