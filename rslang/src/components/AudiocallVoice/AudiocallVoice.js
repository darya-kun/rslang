import React, {useState, useEffect} from 'react';

const AudiocallVoice = ({audioUrl}) => {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const audio = new Audio(`https://react-learnwords-example.herokuapp.com/${audioUrl}`);
    const onPlay = () => audio.play();
    const onMute = () => {
      setPlay(false);
    }
  
    if (play) {
      audio.addEventListener("canplaythrough", onPlay);
      audio.addEventListener('ended', onMute);
    }
  }, [audioUrl, play]);

  const onStart = () => {
    setPlay(true);
  }

  return (
    <div className='voice' onClick={onStart}>
      <button className='voice__button' type='button' aria-hidden='true'>
        <svg className='voice__icon' viewBox='0 0 24 24'>
          <path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z'></path>
        </svg>
      </button>
    </div>
  )
}

export default AudiocallVoice;