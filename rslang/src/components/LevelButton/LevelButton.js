import React, {useState} from 'react';

const LevelButton = ({value, i}) => {
  const [selected, setSelected] = useState();
  const [color, setColor] = useState();

  function getLevel(i) {
    setSelected(true);
    setColor('#50ba9e');
    localStorage.setItem('selectedLevel', 'true');
    localStorage.setItem('selectedIndexLevel', i);
  }
  
  return (
  <div>
    <div className='level-button' selected={{selected}} 
      style={{backgroundColor: `${color}`}} role='button'
      tabIndex='0' onClick={() => getLevel(i, selected)}>{value}</div>
  </div>
  )
}

export default LevelButton;