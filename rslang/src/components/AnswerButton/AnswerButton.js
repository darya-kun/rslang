import React, {useEffect, useState} from 'react';
import getWord from '../../utils/getWord';

const AnswerButton = ({i, item, answerWord, popUp}) => {
  const level = localStorage.getItem('selectedIndexLevel');
  const [word, setWord] = useState();

  function clickHandler() {
    if(word === answerWord) {
      localStorage.setItem('audiocallAnswer', JSON.stringify(['right', `${answerWord}`]));
      console.log('Answer is right');
      popUp()
   
    } else { 
      localStorage.setItem('audiocallAnswer', JSON.stringify(['wrong', `${answerWord}`]));
      console.log('Answer is wrong');
      popUp()
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
            onClick={clickHandler}
            type='button'>
      {i+1} {word}
    </button>
  )
}

export default AnswerButton;