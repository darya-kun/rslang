import React from 'react';
import './LevelButton.css';

const LevelButton = ({value, classes, i, clickLevelHandler}) => {
  function onClick(i, e) {
    e.target.style.backgroundColor = '#50ba9e';
    clickLevelHandler();
    localStorage.setItem('selectedLevel', 'true');
    localStorage.setItem('selectedIndexLevel', i);
  }

  return (
  <div>
    <div className={classes}
         role='button' tabIndex='0'
         onClick={(e) => onClick(i, e)}>{value}</div>
  </div>
  )
}

export default LevelButton;