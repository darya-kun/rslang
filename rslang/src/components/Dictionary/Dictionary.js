import React from 'react';
import DictionaryUnit from '../DictionaryUnit/DictionaryUnit';
import {Link} from 'react-router-dom';
import './dictionary.css';

const Dictionary = () => {
  const units = [
    { id: 1, src: '/img/cat-books.png'},
    { id: 2, src: '/img/cat-pencil.png'},
    { id: 3, src: '/img/cat-backpack.png'},
    { id: 4, src: '/img/cat-books.png'},
    { id: 5, src: '/img/cat-pencil.png'},
    { id: 6, src: '/img/cat-backpack.png'},
  ]

  const elements = units.map((item) => {
    return <div key={item.id}><Link to={`chapter/${item.id}/pages/1`}><DictionaryUnit id={item.id} src={item.src}/></Link></div>
  });
  return   (
    <div className="container">
      <section className="dictionary section">
        <h2 className='title_section'>Учебник</h2>
        <div className='dictionary__icons'></div>
        <div className="dictionary__container">
          {elements}
        </div>
      </section>
    </div>
  )
}

export default Dictionary;