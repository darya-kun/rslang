import React from 'react';
import './cover.css';

const Cover = ({togglePopMenu}) => {
  return   <div className="cover" onClick={() => togglePopMenu()}></div>
}

export default Cover;