import React, {useEffect, useState} from 'react';
import Service from '../Api/Api';
import './audiocallImg.css';

const temp = new Service();

const AudiocallImg = ({answer}) => {
  const [screenShot, setScreenshot] = useState(undefined);
  const urlImage = localStorage.getItem('answerImg');
console.log(urlImage)
 /* useEffect(() => {
    async function fetchData() {
      const [response, error] = await temp.getImage(urlImage)
      if(error)
        console.log(error)
      else {
        setScreenshot(response)
      }
    }
    fetchData();
  })*/

  return (
  <div className='dictionary-card'>
    <img src={screenShot} className='dictionary-card__image' alt='pix'></img>
  </div>
  )
}

export default AudiocallImg;