import React from 'react';
import PageListItem from '../PageListItem/PageListItem';
import { Link } from 'react-router-dom';

function HomePage({cards}) {
  const elements = cards.map((item, i) => {
    return <div key={item.id}><Link to={item.link}><PageListItem title={item.title} src={item.src}/></Link></div>
  });
      return (
        <main className='main'>
          <div className="cards-container">
            {elements}
          </div>
        </main>
      )
  }
  
  export default HomePage;