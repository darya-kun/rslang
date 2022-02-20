import React, {useEffect, useState} from 'react';
import getWord from '../../utils/getWord';

const AnswerButton = ({i, item, answerWord, popUp}) => {
  const level = localStorage.getItem('selectedIndexLevel');
  const [word, setWord] = useState();
  const [fontColor, setFontColor] = useState();

  function clickHandler() {
    if(word === answerWord) {
      localStorage.setItem('audiocallAnswer', JSON.stringify(['right', `${word}`]));
      setFontColor('green');
      console.log('Answer is right');
   
    } else { 
      localStorage.setItem('audiocallAnswer', 'wrong');
      setFontColor('red');
      console.log('Answer is wrong');
    }
  }
  
  useEffect(() => { 
    async function fetchData() {
      try {
        const res = await getWord(level, item);
        setWord(res.wordTranslate);
      } catch (err) {
        console.log(err);
      }
    }
      fetchData();
  });
   
  return (
    <button className='audiocall__button audiocall__button_answer' 
            onClick={clickHandler} style={{backgroundColor: `${fontColor}`}}
            type='button'>
      {i+1} {word}
    </button>
  )
}

export default AnswerButton;