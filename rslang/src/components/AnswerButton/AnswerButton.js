import React, {useEffect, useState} from 'react';
import getWord from '../../utils/getWord';

const AnswerButton = ({i, item, answerWord, popUp}) => {
  const level = localStorage.getItem('selectedIndexLevel');
  const [word, setWord] = useState();
  const [isDisable, setIsDisable] = useState();

  function clickHandler() {
    if(word === answerWord) {
      localStorage.setItem('audiocallAnswer', JSON.stringify(['right', `${answerWord}`]));
      popUp(); 
    } else { 
      localStorage.setItem('audiocallAnswer', JSON.stringify(['wrong', `${answerWord}`]));
      popUp();
    }
    setIsDisable(false);  
  }

  async function fetchData() {
      const res = await getWord(level, item);
      setWord(res.wordTranslate);
  }
  
  useEffect(() => { 
      fetchData();
  });
   
  return (
    <button className='audiocall__button audiocall__button_answer' disabled={isDisable}
            onClick={clickHandler}
            type='button'>
      {i+1} {word}
    </button>
  )
}

export default AnswerButton;