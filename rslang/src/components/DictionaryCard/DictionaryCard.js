import React from 'react';
import './dictionaryCard.css';

const DictionaryCard = ({item}) => {
  return (
  <div className='dictionary-card'>
    <img src={item.image} className='dictionary-card__image' alt='pix'></img>
    <div className='dictionary-card__contain'>
      <div className='dictionary-card__main-text'>
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
