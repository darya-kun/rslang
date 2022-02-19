import React, {useEffect, useState} from 'react';
import getWord from '../../utils/getWord';

const AnswerButton = ({i, item}) => {
  const level = localStorage.getItem('selectedIndexLevel');
  const [word, setWord] = useState();
  
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
    <button className='audiocall__button audiocall__button_answer' type='button'>
      {i+1} {word}
    </button>
  )
}

export default AnswerButton;